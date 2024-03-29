import { uniqueId } from "lodash";

const SuperAdminMenuitems = [
    {
        id: uniqueId(),
        title: "Dashboard",
        icon: "fluent:trophy-16-filled",
        href: "/admin/dashboard",
    },
    {
        id: uniqueId(),
        title: "Manage",
        icon: "material-symbols:folder-managed",
        href: "/admin/manage",
    },
    {
        id: uniqueId(),
        title: "Admins",
        icon: "fa-solid:users-cog",
        href: "/admin/admins",
    },
    {
        id: uniqueId(),
        title: "Schools",
        icon: "mdi:account-graduation",
        href: "/admin/schools",
    },
    {
        id: uniqueId(),
        title: "Students",
        icon: "mdi:account-graduation",
        href: "/admin/students",
    },

    {
        id: uniqueId(),
        title: "Learn",
        icon: "fluent:text-bullet-list-tree-16-filled",
        href: "/admin/learns",
    },
    {
        id: uniqueId(),
        title: "Orders",
        icon: "ic:baseline-local-grocery-store",
        href: "/admin/orders",
    },

    {
        id: uniqueId(),
        title: "Weekly Quest",
        icon: "mdi:head-question",
        href: "/admin/quests",
    },
    {
        id: uniqueId(),
        title: "Live Show",
        icon: "fluent:live-20-filled",
        href: "/admin/live_shows",
    },
    {
        id: uniqueId(),
        title: "Topics",
        icon: "ic:baseline-library-books",
        href: "/admin/topics",
    },
    {
        id: uniqueId(),
        title: "Questions",
        icon: "flat-color-icons:questions",
        href: "/admin/questions",
    },
    {
        id: uniqueId(),
        title: "Flash Cards",
        icon: "fluent:playing-cards-20-filled",
        href: "/admin/flash-cards",
    },

    {
        id: uniqueId(),
        title: "News & Blog",
        icon: "simple-icons:microdotblog",
        href: "/admin/blogs",
    },

    {
        id: uniqueId(),
        title: "FAQ",
        icon: "wpf:faq",
        href: "/admin/faqs",
    },

    {
        id: uniqueId(),
        title: "Coupons",
        icon: "mdi:coupon",
        href: "/admin/coupon",
    },
    {
        id: uniqueId(),
        title: "Report",
        icon: "carbon:report-data",
        href: "/admin/report",
    },
    {
        id: uniqueId(),
        title: "Clarity",
        icon: "mdi:web",
        href: "https://clarity.microsoft.com/projects/view/iuzcrw537o/dashboard",
    },
];

export default SuperAdminMenuitems;
