
import React, { useState } from 'react';
import TextInput from '@/themes/components/input/appInput';
import styles from '@/themes/styles/Home.module.css';
import RadioInput from '@/themes/components/radioButton/appRadioButton';
import SelectInput from '@/themes/components/SelectInput/SelectInput';
import SwitchInput from '@/themes/components/appSwitch/appSwitch';

const HomePage: React.FC = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  

  return (
    <div className={styles.main}>
      <TextInput 
        placeHolder="Enter your username" 
        type='text' 
        // size='small' 
        />

      <TextInput 
        placeHolder="Enter your phonenumber" 
        type='number' 
        // size='small' 
        />
      <TextInput 
        placeHolder="Enter your email" 
        type='email' 
        // size='small' 
        />
      <RadioInput options={options} />
      <SelectInput placeholder="Select an option" options={options} />
      <div className="switch-container">
      <SwitchInput defaultChecked={switchValue} onChange={setSwitchValue} />
      </div>
    </div>
  );
};

export default HomePage;
