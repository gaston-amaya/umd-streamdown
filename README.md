# UMD build for vercel/streamdown

The vercel/streamdown package does not provide a UMD build. This repository serves as a way to use [streamdown](https://github.com/vercel/streamdown) via a UMD global (window.Streamdown), for example in projects like [IslandjsRails](https://github.com/Praxis-Emergent/islandjs-rails).

Built files are available here or via npm as package @gastonsk/umd-streamdown.

**Install via npm:**

    npm i @gastonsk/umd-streamdown


**Or via CDN:**

    <script src="https://unpkg.com/@gastonsk/umd-streamdown/dist/umd-streamdown.js" />

####  Files are built, tagged, and published on NPM automatically (GitHub Workflow checks upstream daily) so this repository should always be synced with upstream.