export default function Button({ children, variant = 'primary', className = '', ...props }) {
    const base = 'px-6 py-2.5 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400';
    const variants = {
        primary: 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40',
        secondary: 'bg-soft-card dark:bg-soft-darkCard text-soft-text dark:text-soft-darkText border border-soft-text/10 hover:border-brand-400'
    };
    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>
    );
}