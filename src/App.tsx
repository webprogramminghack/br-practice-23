import React from "react";
import "./App.css";
import { GreetingWithClass } from "./components/ClassComponent/ClassComp";
import GreetingWithFunction, {
  GreetingWithFunction2,
} from "./components/FunctionalComponent/FunctionComp";
import UserProfile from "./components/Props/UserProfile";
import Navbar from "./components/Navbar/Navbar";
import PropDrilling from "./components/PropsDrilling/PropsDrilling";
import { CardSpreadSyntax } from "./components/SpreadSyntax/CardSpreadSyntax";
import Box from "./components/StylingReact/Box";
import Card from "./components/RestParamsProps/Card";
import CounterWithClass from "./components/State/ClassState/CounterWithClass";
import CounterWithFunction from "./components/State/FunctionState/CounterWithFunction";

function App() {
  // const [msg, setMsg] = useState<string | null>("Halo Dunia");
  // const handleClick = () => {
  //   setMsg("Button Clicked");
  //   console.log(msg);
  // };

  const productCardProps = {
    title: "Meja",
    description:
      "Ini adalah deskripsi singkat tentang produk unggulan kami yang inovatif dan berkualitas tinggi.",
    imageUrl:
      "https://www.chandrakarya.com/6030-big_default_2x/meja-kantor-modera-eod-1275.jpg",
    buttonText: "Lihat Detail",
    onButtonClick: () => alert("Melihat detail produk!"),
    className: "m-4",
  };

  return (
    <div className="mb-[500px]">
      <Navbar />
      <GreetingWithClass name="Dicky" />
      <GreetingWithFunction name="Ucup" />
      <GreetingWithFunction2 />
      <UserProfile
        name="Lintang"
        age={20}
        address={{
          street: "Jl Untung Jawa",
          city: "Tangerang",
          zip: "15115",
        }}
        time="19.00 WIB"
      />
      <UserProfile
        name="Ruddy"
        age={23}
        address={{
          street: "Jl Suropati",
          city: "Tangerang",
          zip: "15115",
        }}
        time="20.00 WITA"
      />
      <PropDrilling />
      {/* <Button label={"Click Saya"} onClick={handleClick} /> */}
      <Box className="mt-8 bg-gray-200 text-gray-700 shadow-md">
        <p className="text-lg font-medium">
          This is a styled box using Tailwind CSS.
        </p>
        <p className="text-sm mt-2">
          It demonstrates how to apply styling directly with utility classes.
        </p>
      </Box>
      <Card
        title="Card Title"
        className="custom-card"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <h1>This is the card contents</h1>
        <p>This is somehting</p>
        {/* 1 Tag di dalam HTML itu disebut NODE (Document Object Model) */}
      </Card>

      <div className="flex mb-[200px]">
        <CardSpreadSyntax
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1280px-Facebook_f_logo_%282019%29.svg.png"
          title="Tentang Kami"
          buttonText="Lihat Detail"
          onButtonClick={() => alert("Melihat social media!")}
          description="Kami adalah perusahaan yang berdedikasi untuk menyediakan solusi terbaik bagi Anda."
          className="m-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
        />
        <CardSpreadSyntax
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
          title="Tentang Kami"
          description="Kami adalah perusahaan yang berdedikasi untuk menyediakan solusi terbaik bagi Anda."
          className="m-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
        />
        <CardSpreadSyntax
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          title="Tentang Kami"
          description="Kami adalah perusahaan yang berdedikasi untuk menyediakan solusi terbaik bagi Anda."
          className="m-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
        />

        <CardSpreadSyntax {...productCardProps} />
      </div>

      <CounterWithClass />
      <CounterWithFunction />
    </div>
  );
}

export default App;
