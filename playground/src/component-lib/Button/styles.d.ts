export declare const useStyles: (props?: any) => Record<"contained" | "disabled" | "outlined", string>;
interface StyledButtonProps {
    issecondary?: boolean;
    bgcolor: string;
}
export declare const StyledButton: import("styled-components").StyledComponent<import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").ButtonTypeMap<{}, "button">>, any, StyledButtonProps, never>;
export {};
