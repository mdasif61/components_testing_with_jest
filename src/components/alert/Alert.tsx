import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
import {useState} from 'react'

type AlertType =DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>&{
    children: ReactNode;
    variant: 'primary' | 'danger' | 'secondary' | 'accent' | 'success' | 'warning';
    icon?: boolean;
    bordered?:boolean;
    className?:string|undefined;
    dismiss?:boolean
}

const Alert = ({ children, variant, icon, bordered,className,dismiss=false,...props }: AlertType) => {

    const [show,setShow]=useState(true)

    const variants = {
        primary: 'bg-primary-100',
        danger: 'bg-danger-100',
        secondary: 'bg-secondary-100',
        accent: 'bg-accent-100',
        success: 'bg-success-100',
        warning: 'bg-warning-100',
    }

    const colors = {
        color: `${variant === 'danger' ? 'text-danger-400' : variant === 'primary' ? 'text-primary-400' : variant === 'secondary' ? 'text-secondary-400' : variant === 'accent' ? 'text-accent-400' : variant === 'success'?'text-success-400' : variant === 'warning' ? 'text-warning-400' : ''}`
    };

    const xBtn={
        buttonBg: `${variant === 'danger' ? 'hover:bg-danger-300' : variant === 'primary' ? 'hover:bg-primary-300' : variant === 'secondary' ? 'hover:bg-secondary-300' : variant === 'accent' ? 'hover:bg-accent-300' : variant === 'success'?'hover:bg-success-300' : variant === 'warning' ? 'hover:bg-warning-300' : ''}`
    }

    const borders={
        border: `${variant === 'danger' ? 'border-danger-300 border' : variant === 'primary' ? 'border-primary-300 border' : variant === 'secondary' ? 'border-secondary-300 border' : variant === 'accent' ? 'border-accent-300 border' : variant === 'success' ? 'border-success-300 border' : variant === 'warning' ? 'border-warning-300 border' : ''}`
    }

    return (
        show?<div {...props} className={twMerge(variants[variant],bordered?borders.border:'', 'font-semibold bg-opacity-80 py-3 rounded-lg px-4 my-1 text-left w-auto min-h-12 flex items-center',className)} data-testid='alert-container'>
        {icon ? <FontAwesomeIcon data-testid='icons' className={twMerge(colors.color, 'm-2')} icon={faCircleExclamation} /> : ''}
        <h1 className={twMerge(colors.color,'flex-1')} role='heading'>{children}</h1>
        {dismiss&&<button onClick={()=>setShow(false)} className={twMerge(xBtn.buttonBg,'bg-opacity-20 p-2 w-8 hover:bg-opacity-20 duration-300 rounded flex items-center justify-center')} data-testid='button'>
            <FontAwesomeIcon data-testid="buttonIcon" className={twMerge(colors.color)} icon={faXmark}/>
        </button>}
    </div>:null
    );
};

export default Alert;