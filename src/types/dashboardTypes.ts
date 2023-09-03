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

export interface VisitProps{
    id: number;
        startTime: string;
        endTime: string;
        status: string;
        createdAt: string;
        updatedAt: string;
        appointmentId: number;
        patientId: number;
        branchId: string;
        userId: string;
        serviceId: number
}
export interface PatientProps{
  id: number,
        fname: string;
        lname: string;
        email: string;
        phone: string;
        dob: string;
        nid: string;
        avatar: string;
        emailVerified: boolean,
        phoneVerified: boolean,
        diagnosis: string;
        status: string;
        userType: string;
        password: string;
        createdAt: string;
        updatedAt: string;
  }
export interface ServiceProps{
  id: number;
  name: string;
  description: string;
  avatar: string;
  status: string;
  createdBy: string;        
  createdAt: string;
  updatedAt: string;
}
export interface PaymentProps{
  id: number;
  sessionPrice: number;
  pay: number;
  debit: number;
  credit: number;
  totalPayment: number;
  totalSession: number;
  remainsSession: number;
  paymentMethod: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  visitId: number,
  patientId: number,
  serviceId: number,
  patient:PatientProps;
  service:ServiceProps;
  visit:VisitProps;
}
export interface UserProps{
    id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    userType: string;
    status: string;
    createdAt: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    avatar: string;
    dob: string;
    nid: string;
    location: LocationProps;
  }
export interface LocationProps{
  branchId: string;
  cell: string;
  country: string;
  createdAt: string;
  district: string;
  id: number;
  patientId: number;
  province: string;
  sector: string;
  updatedAt: string;
  userId: string;
  village: string;
}