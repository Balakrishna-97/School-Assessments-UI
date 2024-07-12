import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationNext from 'material-ui/svg-icons/navigation/chevron-right';
import '../styles/css/Assessments.css';
import { ToolbarSeparator } from 'material-ui';

const MenuItemButton = (props) => {
	const handleComponent = () => props.history.push(`/${props.componentName}`);

	return (
		<div>
			<RaisedButton
				className="menu-buttons"
				label={props.label}
				onClick={handleComponent}
				icon={<NavigationNext className="navigation-button" />}
			/>
			<ToolbarSeparator className="menu-toolbar-separator" />
		</div>
	);
};

export default MenuItemButton;
