---
layout: 'layouts/page.html'
title: Change log
excerpt: This page explains all the changes that have been made to this dataset and website.
---

## 24 July 2024

The entire site has been rebuilt using Eleventy instead of Jekyll. The underlying dataset was amended to support the new site.

As a result of the changes there is now a simpler core CSV dataset that lists only the member of Parliament, their ID number from the UK Parliament website, and the source of the information pertaining to their LGBT+ identity. Eleventy uses the ID number and polls the UK Parliament Members API, combines it with the data from the CSV file, and then outputs the site based on a newly created JSON file.

This new site also allows new features, including individual pages for every LGBT+ MP and more detailed information about each member's parliamentary career.

Further stylistic changes are planned to the website, including refreshed styles and further rich data polled from the UK Parliament APIs.

Additional MPs for previous parliamentary periods have also been added.

## 4 to 12 July 2024

The dataset was updated to reflect the results of the UK General Election.

Further updates to the dataset are likely to be required in the coming days.

## 3 June 2024

The dataset was updated to reflect former MPs who had confirmed they were not standing for re-election.

The dataset was also updated to reflect missing data for Crispin Blunt (Reigate). Other data was amended to ensure correct dates were recorded.

## 30 May 2024

A General Election has been called. This dataset was updated to reflect the [final composition of the House of Commons](/historic/parliament/end/2024-05-30) on 30 May 2024, when Parliament was dissolved.

# 29 May 2024

The dataset was updated to show a change of party affiliation for Lloyd Russell-Moyle (Brighton Kemptown). The BBC reports that [Lloyd Russell-Moyle is suspended from the Labour Party](https://www.bbc.co.uk/news/articles/c5114q1x09eo) following a complaint into his behaviour.

# 24 May 2024

Added missing official portraits of Damien Egan (Labour, Fylde) and Keir Mather (Selby and Aintsy).

## 18 April 2024

The dataset was updated to show a change of party affiliation for Mark Menzies (Fylde). Mark Menzies was [suspended from the Conservative Party over alleged misuse of campaign funds](https://www.bbc.co.uk/news/uk-politics-68841840) on 18 April 2024.

## 12 April 2024

The dataset was updated to indicate that Scott Benton (Blackpool South) resigned as an MP on 25 March 2024.

## 9 April 2024

The dataset was updated to show a change in party affiliation for William Wragg (Hazel Grove). William Wragg [resigned the Conservative Party whip](https://www.bbc.co.uk/news/uk-politics-68773702) on 9 April 2024.

## 29 February 2024

The dataset was updated to include Kirsty Blackman (Scottish National Party, Aberdeen North)

## 16 February 2024

The dataset was updated to include Damien Egan (Labour, Kingswood).

## 16 December 2023

The dataset was updated to show a change of party affiliation for Scott Benton (Blackpool South). Scott Benton was suspended from the Conservative party following [allegations of misconduct](https://www.bbc.co.uk/news/uk-politics-65193097) and pending an investigation. He has been an independent MP since 5 April 2023; this is now reflected in the dataset.

## 22 July 2023

The dataset was updated to include Keir Mather (Labour, Selby and Ainsty).

## 2 March 2023

The dataset was restructured to ensure the presentation of the data on this website was clearer and more accurate. The `start-date` and `end-date` columns have been renamed as `entry-start-date` and `entry-end-date`. A new
`mp-since` column has been added, containing the date from which an MP has been continuously elected.

This website now uses both dates to present information about MPs.

Links have also been added to MPs official pages on the UK Parliament website.

The dataset was also updated to remove a duplicate record for former MP.

## 25 February 2023

The dataset was updated to include Ashley Dalton (Labour, West Lancashire).

## 18 October 2022

The dataset was updated to show a change of party affiliation for Conor Burns (Conservative, Bournemouth West). Following an allegation of serious misconduct, the whip was restored as the investigation "[concluded Mr Burns has no case to answer over a complaint that was made against him in early October](https://news.sky.com/story/tory-mp-conor-burns-has-conservative-whip-restored-and-says-he-was-thrown-to-the-wolves-12760852)".

## 11 October 2022

The dataset was updated to show a change of party affiliation for Conor Burns (Conservative, Bournemouth West). Following "[a complaint of serious misconduct](https://www.bbc.co.uk/news/uk-politics-63177669)", the Conservative Party whip was suspended and Conor Burns now sits as an independent MP.

## 8 September 2022

The dataset was updated to show a change of party affiliation for Nick Brown (Labour, Newcastle East). [BBC News reports](https://www.bbc.co.uk/news/uk-politics-62828438) that Nick was "suspended from the Labour Party pending an investigation into a complaint" and would "sit as an independent until reinstated".

## 7 September 2022

The dataset was updated to include Simon Lightwood (Labour, Wakefield).

## 8 May 2022

The UK Parliament website records that Imran Ahmad Khan (Wakefield) left the House of Commons on 3 May, following his resignation.

## 21 April 2022

The dataset was updated to include Imran Ahmad Khan (Wakefield). Imran Ahmad Khan was originally added to the dataset following the 2019 general election. His information was subsequently removed after it was reported that he was not actually gay. In his recent criminal trial, he confirmed he was, in fact, gay. His data was re-added to the dataset as a result.

## 30 March 2022

The dataset was updated to include Jamie Wallis (Conservative, Bridgend and Porthcawl).

## 31 January 2022

The dataset was updated to include multiple MPs from Parliaments prior to 2017.

The dataset was updated to add the declared identities of several MPs.

## 14 December 2021

The dataset was updated to include Scott Benton (Conservative, Blackpool South).

## 11 October 2021

The dataset was updated to include Olivia Blake (Labour, Sheffield Hallam).

## 10 October 2021

The dataset was updated to include Dehenna Davison (Conservative, Bishop Auckland) who came out as bisexual in an article in the Telegraph on 10 October 2021.

## 14 August 2021

A number of major changes were made to this website and the structure of the dataset

- The website design was updated to include a new visual identity, and to include photos for each member that forms part of the dataset.
- The structure of the dataset was changed to include additional data for each member, including:
  - a new field to make explicit reference to the member's LGBT+ identity, if that can be evidenced – these fields are not yet completed and will be added later
  - unique id numbers to allow easy identification of members via the UK Parliament website
  - URLs linking to member's page on the UK Parliament website
  - licensing information for a member's photograph
  - minor changes to the naming of various fields
- An additional record was added for Neale Hanvey to reflect that he changed his party from the Scottish National Party to the Alba Party

## 2 July 2021

The dataset was updated to include Kim Leadbeater, who was elected as the MP for Batley and Spen in a recent by-election.

## Historical updates

Changes to the dataset prior to 2021 can be seen in the Github repository [commit history](https://github.com/johnpeart/lgbt-mp/commits/main/_data).
