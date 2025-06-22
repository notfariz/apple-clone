function FooterLinks() {
    const links = [
        {
            title: 'Shop and Learn',
            items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
        },
        {
            title: 'Apple Store',
            items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Trade In', 'Ways to Buy', 'Recycling Programme', 'Order Status', 'Shopping Help'],
        },
        {
            title: 'For Business',
            items: ['Apple and Business', 'Shop for Business'],
        },
        {
            title: 'For Education',
            items: ['Apple and Education', 'Shop for Education', 'Shop for University'],
        },
        {
            title: 'For Healthcare',
            items: ['Apple in Healthcare', 'Mac in Healthcare', 'Health on Apple Watch'],
        },
        {
            title: 'Apple Values',
            items: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain Innovation'],
        },
        {
            title: 'About Apple',
            items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
        },
    ];

    return (
        <div className="bg-[#f5f5f7] text-sm text-gray-700 px-6 py-12 border-t border-gray-300">
            <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {links.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="font-semibold text-black mb-2">{section.title}</h3>
                        <ul className="space-y-1">
                            {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="hover:underline cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-8 border-t border-gray-300"></div>
        </div>
    );
}

export default FooterLinks;