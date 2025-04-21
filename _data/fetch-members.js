import fs from 'fs';
import csv from 'csv-parser';
import fetch from 'node-fetch';

function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const rows = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                // console.log("Row read from CSV:", row);  // Log each row being read
                rows.push(row);
            })
            .on('end', () => {
                console.log("CSV reading complete. Rows:", rows);  // Log rows when done reading
                resolve(rows);
            })
            .on('error', reject);
    });
}

async function fetchMemberData(memberId) {
    try {
        const response = await fetch(`https://members-api.parliament.uk/api/Members/${memberId}`);
        if (!response.ok) {
            console.error(`Failed to fetch data for member ID: ${memberId}. Status: ${response.status}`);
            return null;
        }
        const data = await response.json();
        const { nameFullTitle, gender, thumbnailUrl } = data.value;
        return { nameFullTitle, gender, thumbnailUrl };
    } catch (error) {
        console.error(`Error fetching data for member ID: ${memberId}`, error);
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
    } catch {
        return null;
    }
}

async function fetchMemberBiography(memberId) {
    try {
        const response = await fetch(`https://members-api.parliament.uk/api/Members/${memberId}/Biography`);
        const data = await response.json();
        const { governmentPosts, oppositionPosts, committeeMemberships } = data.value;
        return {
            governmentPosts: governmentPosts?.length ? governmentPosts : null,
            oppositionPosts: oppositionPosts?.length ? oppositionPosts : null,
            committeeMemberships: committeeMemberships?.length ? committeeMemberships : null
        };
    } catch {
        return null;
    }
}

export default async function () {
    console.log("Fetching member data...");

    const rows = await readCSV('_data/members.csv');
    const members = [];

    for (const row of rows) {
        console.log(`Processing member ID: ${row.ID}`);  // Log each member being processed
        const memberId = row.ID;
        const memberData = await fetchMemberData(memberId);
        const memberHistory = await fetchMemberHistory(memberId);
        const memberBiography = await fetchMemberBiography(memberId);

        if (memberData && memberHistory) {
            members.push({
                memberId,
                firstName: row.firstName,
                lastName: row.lastName,
                lgbt: {
                    lgbtIdentity: row.identity,
                    lgbtSourceDescription: row.sourceDescription,
                    lgbtSourceDate: row.sourceDate,
                    lgbtSourceURL: row.sourceURL,
                    lgbtSourceNotes: row.sourceNotes
                },
                memberData,
                partyHistory: memberHistory.partyHistory,
                houseMembershipHistory: memberHistory.houseMembershipHistory,
                governmentPosts: memberBiography?.governmentPosts,
                oppositionPosts: memberBiography?.oppositionPosts,
                committeeMemberships: memberBiography?.committeeMemberships
            });
        }
    }

    // Sort numerically by ID
    members.sort((a, b) => Number(a.memberId) - Number(b.memberId));

    console.log("Saving members to JSON...");
    // Save to JSON file
    fs.writeFileSync('_data/members.json', JSON.stringify(members, null, 2), 'utf-8');
    console.log("Members data saved.");

    return members;
}
