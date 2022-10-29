import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";
import LocalStatistics from "./widgets/LocalStatistics";
import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";
import OtherQuestions from "./widgets/OtherQuestions";

const config = {
  lang: "no",
  botName: "CuBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#F8400C"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm here to provide you with latest CUBEDOTS feeds!`
    ),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type in.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview"
      }
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
      },
      {
        widgetName: "globalStatistics",
        widgetFunc: (props) => <GlobalStatistics />
      },
      {
        widgetName: "localStatistics",
        widgetFunc: (props) => <LocalStatistics />
      },
      {
        widgetName: "emergencyContact",
        widgetFunc: (props) => <Contact />
      },
      {
        widgetName: "medicineDelivery",
        widgetFunc: (props) => <MedicineDelivery />
      },
      {
        widgetName: "others",
        widgetFunc: (props) => <OtherQuestions />
    }
  ]
};

export default config;
