module.exports = {
    siteMetadata: {
        author: "@leits_dev",
        title: "MeetingBar: Your meetings before your eyes",
        siteName: "MeetingBar", // Used as logo text in header, footer, and splash screen
        description: "MeetingBar works on macOS with your calendar. Join and create meetings in one click",
        url: "https://meetingbar.onrender.com",
        language: "en_US",
        icon: "src/content/favicon.png", // Relative to gatsby-config file
        image: "src/content/hero/screenshot.png",
    },

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    shownArticles: 3,

    // There are icons available for the following platforms:
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Download",
            url: "https://github.com/leits/MeetingBar/releases/latest/download/MeetingBar.dmg",
        },
        {
            name: "Homebrew",
            url: "https://formulae.brew.sh/cask/meetingbar"
        },
    ],

    navLinks: {
        menu: [
            // {
            //     name: "Featured At",
            //     url: "/#featured",
            // },
            // {
            //     name: "About Me",
            //     url: "/#about",
            // },
            // {
            //     name: "Features",
            //     url: "/#features",
            // },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "FAQ",
            url: "/faq"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ]
}