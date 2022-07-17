import classes from './MyButton.module.css';

// eslint-disable-next-line react/prop-types
function MyButton({children, ...props}) {
	return (
		<button {...props} className={classes.myBtn}>
			{children}
		</button>
	);
}

export default MyButton;