import Button from "@/components/common/Button";
const About: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Button size="large" shape="rounded-full">Learn More</Button>
      <Button size="medium" shape="rounded-md">Contact Us</Button>
      <Button size="small" shape="rounded-sm">Help</Button>
    </div>
  );
}


export default About;
