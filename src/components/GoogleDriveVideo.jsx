export default function GoogleDriveVideo({ url, title, thumbnail }) {
  // Extract file ID from Google Drive URL
  const getFileId = (driveUrl) => {
    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const fileId = getFileId(url);

  if (!fileId) {
    return (
      <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 text-center">
        <p className="text-red-400">Invalid Google Drive URL</p>
      </div>
    );
  }

  // Try multiple embed approaches
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const directViewUrl = `https://drive.google.com/file/d/${fileId}/view`;

  return (
    <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-purple-500/20">
      {/* Video Embed */}
      <div className="relative w-full bg-slate-900" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation"
        />
      </div>
      
      {/* Info Bar */}
      <div className="p-4 bg-slate-800/50 border-t border-purple-500/20">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            </svg>
            <span className="font-medium">Hosted on Google Drive</span>
          </p>
          <div className="flex gap-3">
            <a 
              href={directViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition flex items-center gap-2 font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Open in Drive
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          If the video doesn't load above, click "Open in Drive" to watch in full quality
        </p>
      </div>
    </div>
  );
}
