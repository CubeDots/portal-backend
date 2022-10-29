import Options from "./Options";

const GeneralOptions = (props) => {
  const mainCategory = [
    {
      name: "Show NRI Services",
      handler: props.actionProvider.handleGlobalStats,
      id: 1
    },
    {
      name: "Show Buyers Corner",
      handler: props.actionProvider.handleLocalStats,
      id: 2
    },
    {
      name: "Show Latest Blogs",
      handler: props.actionProvider.handleContact,
      id: 3
    },
    {
      name: "Help and Support",
      handler: props.actionProvider.handleMedicine,
      id: 4
    },
    {
      name: "Others",
      handler: props.actionProvider.handleOthers,
      id: 5
    }
  ];

  const subCategory = [];
  // const mainCategory = [];

  const options = mainCategory;
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
