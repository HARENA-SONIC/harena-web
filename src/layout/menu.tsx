import { Menu as RaMenu } from 'react-admin';

export const Menu = () => {
  return (
    <RaMenu>
      {/* <RaMenu.Item to="/" leftIcon={<ProfileIcon />} primaryText="Profile" /> */}
      <RaMenu.ResourceItem name="dummies" />
    </RaMenu>
  );
};
