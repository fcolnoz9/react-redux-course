import classNames from 'classnames';

/**
 * Example of reusable component
 * @param children
 * @param className
 * @param rest
 * @return {JSX.Element}
 * @constructor
 */
function Panel({children, className, ...rest}) {

	const finalClassName = classNames(
		'border rounder p-3 shadow bg-white w-full',
		className);

	return <div  {...rest} className={finalClassName}>{children}</div>
}

export default Panel
