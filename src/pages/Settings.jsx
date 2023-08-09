import Heading from "../ui/Heading";
import Row  from '../ui/Row'
import UpdateSettingsFrom from '../features/settings/UpdateSettingsForm'
function Settings() {
  return <Row>
    <Heading as="h1">Update hotel settings</Heading>;

  <UpdateSettingsFrom />
  </Row>
}

export default Settings;
