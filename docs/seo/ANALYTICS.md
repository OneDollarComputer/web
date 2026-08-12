# Analytics & access — One Dollar Computer

GCP project (already in use): **`curious-clone-477013-u6`** (`My First Project`)  
gcloud account on this machine: **`hoardserdure7@gmail.com`**

APIs enabled for this work:

- `analyticsadmin.googleapis.com`
- `analyticsdata.googleapis.com`
- `analytics.googleapis.com`
- `searchconsole.googleapis.com`
- `siteverification.googleapis.com`

## GA4 setup (one-time)

1. Sign in to [Google Analytics](https://analytics.google.com/) as the owner account.  
2. **Admin → Create property**
   - Property name: `One Dollar Computer — onedollarcomputer.com`
   - Time zone: America/Chicago (Austin)
   - Currency: USD  
3. Create a **Web** data stream:
   - URL: `https://onedollarcomputer.com`
   - Stream name: `onedollarcomputer.com (web)`  
4. Copy the **Measurement ID** (`G-XXXXXXXX`).  
5. Put it in [`seo/analytics.json`](../../seo/analytics.json):

```json
"measurementId": "G-XXXXXXXX"
```

6. Deploy the site. Confirm realtime hits in GA4 after loading the homepage.  
7. **Admin → Property access management**: add viewers/editors by email.

The site loads GA via [`js/analytics.js`](../../js/analytics.js) (reads `seo/analytics.json`). Empty `measurementId` = no tag (safe).

## Search Console

1. [search.google.com/search-console](https://search.google.com/search-console)  
2. Add `https://onedollarcomputer.com/`  
3. HTML-tag verification → set `searchConsole.verificationMetaContent` in `seo/analytics.json`  
4. Submit sitemap `https://onedollarcomputer.com/sitemap.xml`  
5. Manage users under **Settings → Users and permissions**

## CLI note (scopes)

`gcloud` user tokens default to Cloud Platform scopes only. Listing GA/Search Console via API needs a browser login to those products **or** OAuth with Analytics/Webmasters scopes. Prefer the GA4 + Search Console UIs for day-to-day access control; use GCP IAM for Cloud APIs/BigQuery export later.

## Optional next steps

- Link GA4 → BigQuery (export) in the same GCP project for raw visit tables  
- Add Google Tag Manager if you need many tags without redeploys  
- Privacy policy page if you expand tracking beyond basic page views  

## Checklist

- [x] GA4 property + web stream created (`odcrs-f842a` / stream `onedollarcomputer.com`)
- [x] `measurementId` written to `seo/analytics.json` → **`G-VGC5PFCWPG`**
- [x] Search Console verified (`sc-domain:onedollarcomputer.com` via IONOS DNS)
- [x] Sitemap submitted (`https://onedollarcomputer.com/sitemap.xml`) — republish site so Google can fetch
- [ ] Teammate emails added (GA4 + Search Console)
- [ ] Realtime test visit confirmed (after deploy)
