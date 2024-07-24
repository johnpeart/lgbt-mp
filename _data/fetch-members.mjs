import fs from 'fs';
import csv from 'csv-parser';
import fetch from 'node-fetch';

async function fetchMemberData(memberId) {
  try {
    const response = await fetch(`https://members-api.parliament.uk/api/Members/${memberId}`);
    const data = await response.json();
    const { nameFullTitle, gender, thumbnailUrl } = data.value;
    return { nameFullTitle, gender, thumbnailUrl };
  } catch (error) {
    console.error(`Error fetching data for Member ID: ${memberId}`, error);
    return null;
  }
}

async function fetchMemberHistory(memberId) {
  try {
    const response = await fetch(`https://members-api.parliament.uk/api/Members/History?ids=${memberId}`);
    const data = await response.json();
    const partyHistory = data[0].value.partyHistory;
    const houseMembershipHistory = data[0].value.houseMembershipHistory;
    return { partyHistory, houseMembershipHistory };
  } catch (error) {
    console.error(`Error fetching history for Member ID: ${memberId}`, error);
    return null;
  }
}

async function fetchMemberBiography(memberId) {
  try {
    const response = await fetch(`https://members-api.parliament.uk/api/Members/${memberId}/Biography`);
    const data = await response.json();
    const governmentPosts = data.value.governmentPosts;
    const oppositionPosts = data.value.oppositionPosts;
    const committeeMemberships = data.value.committeeMemberships;
    return { governmentPosts, oppositionPosts, committeeMemberships };
  } catch (error) {
    console.error(`Error fetching history for Member ID: ${memberId}`, error);
    return null;
  }
}

function readCSVAndFetchData() {
  const members = [];
  const promises = [];

  fs.createReadStream('_data/members.csv')
    .pipe(csv())
    .on('data', (row) => {
      const memberId = row.ID;
      const firstName = row.firstName;
      const lastName = row.lastName;
      const lgbtIdentity = row.identity;
      const lgbtSourceDescription = row.sourceDescription;
      const lgbtSourceDate = row.sourceDate;
      const lgbtSourceURL = row.sourceURL;
      const lgbtSourceNotes = row.sourceNotes;
      const promise = (async () => {
        const memberData = await fetchMemberData(memberId);
        const memberHistory = await fetchMemberHistory(memberId);
        const memberBiography = await fetchMemberBiography(memberId);

        if (memberData && memberHistory) {
          const mergedData = { 
              memberId, 
              firstName, 
              lastName,
              lgbt: { lgbtIdentity, lgbtSourceDescription, lgbtSourceDate, lgbtSourceURL, lgbtSourceNotes }, 
              memberData: memberData,
              partyHistory: memberHistory.partyHistory,
              houseMembershipHistory: memberHistory.houseMembershipHistory,
              governmentPosts: memberBiography.governmentPosts,
              oppositionPosts: memberBiography.oppositionPosts,
              committeeMemberships: memberBiography.committeeMemberships
          };
          members.push(mergedData);
        }
      })();
      promises.push(promise);
    })
    .on('end', () => {
      console.log('CSV file successfully processed.');
      Promise.all(promises).then(() => {
        // Sort members by memberId numerically
        members.sort((a, b) => a.memberId - b.memberId);

        fs.writeFileSync('_data/members.json', JSON.stringify(members, null, 2));
        console.log('Data fetching complete and saved to _data/members.json');
      });
    });
}

readCSVAndFetchData();