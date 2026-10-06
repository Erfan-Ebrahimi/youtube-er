# Video Browsing App

YouTube-style React video browsing interface with search, channel pages and video playback, using Material UI and RapidAPI.

<p dir="rtl">رابط مرور ویدیو با جستجو، صفحات کانال و پخش ویدیو.</p>

[Source](https://github.com/Erfan-Ebrahimi/youtube-er)

## Stack

React · Material UI · Axios · React Player · React Router

## What's inside

- Video feeds and search results
- Channel detail pages
- Video playback with React Player

## Local setup

```bash
git clone https://github.com/Erfan-Ebrahimi/youtube-er.git
cd youtube-er
npm ci
npm start
```

Create a production build with `npm run build`.

## Project layout

- `src/components/` — feed, search, channel and video views
- `src/utils/fetchFromAPI.js` — RapidAPI client
- `src/utils/constants.js` — UI constants

## Project notes

Set `REACT_APP_RAPID_API_KEY` in a local environment file using your own RapidAPI subscription for the configured YouTube API. Restart the development server after changing environment variables. Browser application keys are visible to users, so apply provider restrictions and quotas.

---

[Erfan Ebrahimi](https://github.com/Erfan-Ebrahimi)
