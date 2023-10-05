import PieChartIcon from "@mui/icons-material/PieChart";
import PeopleIcon from "@mui/icons-material/People";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import PolylineIcon from "@mui/icons-material/Polyline";
import InventoryIcon from "@mui/icons-material/Inventory";
import ViewListIcon from "@mui/icons-material/ViewList";
import BuildIcon from "@mui/icons-material/Build";
import AppRegistrationSharpIcon from "@mui/icons-material/AppRegistrationSharp";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

//----dashboard
export const first = [
	{
		icon: <PieChartIcon className="nav-icons" />,
		text: "Dashboard",
		link: "/",
	},
	{
		icon: <PeopleIcon className="nav-icons" />,
		text: "Users",
		link: "/users",
	},
	{
		icon: <EqualizerIcon className="nav-icons" />,
		text: "Daily Activity",
		link: "/daily-activity",
	},
	{
		icon: <BubbleChartIcon className="nav-icons" />,
		text: "Business insight",
		link: "/busines-insight",
	},
	{
		icon: <DataSaverOffIcon className="nav-icons" />,
		text: "CRM",
		link: "/crm",
	},
	{
		icon: <PolylineIcon className="nav-icons" />,
		text: "Work Flow",
		link: "/work-flow",
	},
	{
		icon: <InventoryIcon className="nav-icons" />,
		text: "Inventory",
		link: "/inventory",
	},
];

//----chat bot
export const chatBot = [
	{
		icon: <ViewListIcon className="nav-icons" />,
		text: "Overview",
		link: "/chatbot-overview",
	},

	{
		icon: <BuildIcon className="nav-icons" />,
		text: "Manage",
		link: "/chatbot-manage",
	},
	{
		icon: <AppRegistrationSharpIcon className="nav-icons" />,
		text: "Platforms",
		link: "/chatbot-platform",
	},
];

export const chatBotPlatform = [
	{
		icon: <AppRegistrationSharpIcon />,
		text: "Platforms",
		list: [
			{
				title: "Facebook",
				link: "/chatbot-platform-facebook",
			},
			{
				title: "Instagram",
				link: "/chatbot-platform-instagram",
			},
			{
				title: "Twitter",
				link: "/chatbot-platform-twitter",
			},
			{
				title: "Email",
				link: "/chatbot-platform-email",
			},
			{
				title: "website",
				link: "/chatbot-platform-website",
			},
		],
	},
];

//-----agents
export const agents = [
	{
		icon: <ViewListIcon className="nav-icons" />,
		text: "Overview",
		link: "/agents-overview",
	},
	{
		icon: <PlaylistAddCheckIcon className="nav-icons" />,
		text: "Task Queues",
		link: "/agents-task-queues",
	},
	{
		icon: <BuildIcon className="nav-icons" />,
		text: "Manage",
		link: "/agents-contact",
	},
];
//------VPS
export const vps = [
	{
		icon: <SpeedIcon className="nav-icons" />,
		text: "Performance ",
		link: "/vps-performance-metric",
	},
	{
		icon: <StorageIcon className="nav-icons" />,
		text: "Resource ",
		link: "/vps-Resource Allocation",
	},
	{
		icon: <FolderCopyIcon className="nav-icons" />,
		text: "File managment",
		link: "/vps-file-managment",
	},
	{
		icon: <BuildIcon className="nav-icons" />,
		text: "manage",
		link: "/vps-manage",
	},
];

//--------general
export const general = [
	{
		icon: <AccountCircleIcon className="nav-icons" />,
		text: "Profile",
		link: "/profile",
	},
	{
		icon: <SettingsIcon className="nav-icons" />,
		text: "Settings",
		link: "/settings",
	},
	{
		icon: <LogoutIcon className="nav-icons" />,
		text: "Logout",
		link: "/logout",
	},
];
