function FooterBottom() {
  return (
    <div className="bg-[#f5f5f7] text-xs text-gray-500 border-t border-gray-300 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Sales Policy</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Site Map</a>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;