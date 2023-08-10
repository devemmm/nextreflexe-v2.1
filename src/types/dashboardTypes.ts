export interface HeaderPops {
  text?: string;
  sx?: any;
  props?: any;
}
export interface ApproveModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  title: string;
  visitId: string;
  type: string;
}

export interface FlatButtonProps {
  text: string;
  icon?: any;
  sx?: any;
  postion?: string;
  props?: any;
  onClick?: () => void;
}

//generate type for this object
export interface ObjectType {
  [key: string]: any;
}

