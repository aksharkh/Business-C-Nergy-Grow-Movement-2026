import type { ReactNode } from "react";
import type { MotionProps} from 'framer-motion';


export type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom';


export interface Mentor {
    name: string;
    role: string;
}

export interface Motion extends MotionProps {
    children: ReactNode;
}