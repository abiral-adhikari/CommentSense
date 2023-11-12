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

export interface CommentData {
  type: number;
  comment: string;
  positive_score: number;
  negative_score: number;
  neutral_score: number;
}
