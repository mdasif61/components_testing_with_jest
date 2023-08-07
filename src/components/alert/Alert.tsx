import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
type AlertType = {
    children: ReactNode,
    variant: 'primary' | 'danger' | 'secondary' | 'accent' | 'success' | 'warning';
    icon?: boolean
}

const Alert = ({ children, variant, icon }: AlertType) => {

    const variants = {
        primary: 'bg-primary-100',
        danger: 'bg-danger-100',
        secondary: 'bg-secondary-100',
        accent: 'bg-accent-100',
        success: 'bg-success-100',
        warning: 'bg-warning-100',
    }

    const colors = {
        color: `${variant === 'danger' ? 'text-danger-400' : variant === 'primary' ? 'text-primary-400' : variant === 'secondary' ? 'text-secondary-400' : variant === 'accent' ? 'text-accent-400' : variant === 'success' ? 'text-success-400' : variant === 'warning' ? 'text-warning-400' : ''}`
    }

    return (
        <div className={twMerge(variants[variant], 'font-semibold bg-opacity-80 py-3 rounded-lg px-4 my-1 text-left w-auto min-h-12 flex items-center')} data-testid='alert-container'>
            {icon ? <FontAwesomeIcon data-testid='icons' className={twMerge(colors.color, 'm-2')} icon={faCircleExclamation} /> : ''}
            <h1 className={twMerge(colors.color)} role='heading'>{children}</h1>
        </div>
    );
};

export default Alert;