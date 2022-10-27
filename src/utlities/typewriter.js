import ReactTypingEffect from "react-typing-effect";
const typingInfo = {
  words: [
    "Software Development",
    "Mobile Development",
    "System Architecture",
    "Data Analysis",
    "SEO Driven Development",
    "ED-Tech",
  ],
  colors: ["#C7D710", "#2174C9", "#FA8937", "#24CEC8", "#575A5C", "#C7D710"],
};

const automaticTyping = ({ words, colors } = { ...typingInfo }) => {
  return (
    <ReactTypingEffect
      speed={100}
      eraseDelay={600}
      eraseSpeed={100}
      typingDelay={100}
      text={words}
      cursor={" "}
      displayTextRenderer={(text, i) => {
        return <span style={{ color: colors[i] }}>{text}</span>;
      }}
    />
  );
};

export default automaticTyping;
