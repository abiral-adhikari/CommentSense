export interface Buttontype {
  color:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  onPress: () => void;
  buttonLabel: string;
}

export interface Comments {
  type: number;
  comment: string;
  score: number;
}
