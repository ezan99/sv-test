import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    { value: 'idcard', label: 'SalesViewer IDcard' },
    {
     type: 'group', name: 'Assign Employee', items: [
       { value: 'three', label: 'John Doe' },
       { value: 'four', label: 'Alice Doe' }
     ]
    },
    { value: 'hide', label: 'Hide Company' },
    { value: 'bearbeiten', label: 'Unternehmen bearbeiten' },
    { value: 'session', label: 'Session loschen' },
  ];

const defaultOption = options[0];

export const DropdownMenu = () => {
    return (
        <Dropdown className='w-96' options={options} value={defaultOption} placeholder="Select an option" />
    )

}
