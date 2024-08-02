import ProfileProps from "./ProfileProps";

interface HeaderProps {
    items: {
      key: string;
      label: React.ReactElement;
    }[];
    profile?: ProfileProps | undefined;
  }

export default HeaderProps