
export const data = [
    {
        class: ["dashboard"],
        icon: "faGaugeHigh",
        link: "/dashboard",
        title: "Dashboard"
    },
    {
        class: ["catalog"],
        icon: "faBook",
        link: "/catalog",
        title: "Catalog"
    },
    {
        class: ["management"],
        icon: "faGears",
        title: "Management",
        children: [
            {
                class: ["users"],
                icon: "faUser",
                link: "/management/users",
                title: "Users",
            },
            {
                class: ["courses"],
                icon: "faBook",
                link: "/management/courses",
                title: "Courses",
            }
        ]
    },
    {
        class: ["settings"],
        icon: "faGear",
        title: "Settings",
        children: [
            {
                class: ["edit-profile"],
                icon: "faIdBadge",
                link: "/settings/edit-profile",
                title: "Edit profile",
            },
            {
                class: ["change-password"],
                icon: "faKey",
                link: "/settings/change-password",
                title: "Change password",
            },
            {
                class: ["notifications"],
                icon: "faBell",
                link: "/settings/notifications",
                title: "Notifications",
            },
            {
                class: ["subscriptions"],
                icon: "faMoneyCheckDollar",
                link: "/settings/subscriptions",
                title: "Subscriptions",
            },
            {
                class: ["payment-method"],
                icon: "faCreditCard",
                link: "/settings/payment-method",
                title: "Payment method",
            },
            {
                class: ["theme"],
                icon: "faBrush",
                link: "/settings/theme",
                title: "Theme",
                children: [
                    {
                        class: ["global"],
                        icon: "faGlobe",
                        link: "/settings/theme/globals",
                        title: "Globals",
                    },
                    {
                        class: ["buttons"],
                        icon: "faCircleDot",
                        link: "/settings/theme/buttons",
                        title: "Buttons",
                    }
                ]
            }
        ]
    }
]

export const currentPage = "Dashboard"
