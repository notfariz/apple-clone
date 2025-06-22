function Footer() {
  return (
    <footer className="bg-neutral-100 text-gray-600 text-sm px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4">More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you.</p>
        <p className="mb-6">Or call 000800 040 1966.</p>
        <hr className="mb-4 border-gray-300" />
        <div className="flex flex-col md:flex-row md:justify-between">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Sales Policy</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;