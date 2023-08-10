// pages/index.tsx
import { useEffect, useState } from 'react';
import { ConnectWallet, ThirdwebNftMedia, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import Image from "next/image";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const socialMediaData = [
  {
    name: "Twitter",
    link: "https://twitter.com/z1nkx_",
    iconClass: "fab fa-twitter",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/your-linkedin-profile/",
    iconClass: "fab fa-linkedin",
  },
  {
    name: "GitHub",
    link: "https://github.com/your-github-username",
    iconClass: "fab fa-github",
  },
  // ... existing platforms ...
  {
    name: "Instagram",
    link: "https://www.instagram.com/your-instagram-username/",
    iconClass: "fab fa-instagram",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/your-facebook-page/",
    iconClass: "fab fa-facebook",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/your-channel",
    iconClass: "fab fa-youtube",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/your-twitch-channel",
    iconClass: "fab fa-twitch",
  },
  {
    name: "Discord",
    link: "https://discord.gg/your-discord-server",
    iconClass: "fab fa-discord",
  },
  {
    name: "Medium",
    link: "https://medium.com/@your-medium-username",
    iconClass: "fab fa-medium",
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/user/your-reddit-username",
    iconClass: "fab fa-reddit",
  },
  // TikTok
  {
    name: "TikTok",
    link: "https://www.tiktok.com/your-tiktok-profile/",
    iconClass: "fab fa-tiktok",
  },
  // Add one more platform
  {
    name: "Snapchat",
    link: "https://www.snapchat.com/add/your-snapchat-username",
    iconClass: "fab fa-snapchat",
  },
];


const linkButtons = [

  {
    label: "GLB 3D ANUBIS",
    link: "https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0xbAB5bF866924478130A0636CB83d36c8196F4617&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=d36073abeb99722138f89babb7f0aedb&tokenId=1&theme=dark&primaryColor=purple",
  },
  {
    label: "Secure Download",
    link: "https://app.darkblock.io/",
  },
  // Add more buttons as needed
];



const Home: NextPage = () => {
  const { contract } = useContract('0x185E6dA7F560A08d12C640D795C8ea5B3F658Df7', 'edition-drop');
  const { data: nfts, isLoading: loadingNfts } = useNFTs(contract);
  const { data: contractMetadata, isLoading: loadingContractMetadata } = useContractMetadata(contract);

  const [viewCount, setViewCount] = useState(0);
  

  return (
    <main className={styles.main}>
      {/* Display the profile image of the contract */}
      {!loadingContractMetadata && contractMetadata && (
        <div className={styles.contractImage}>
          <img
            src={contractMetadata?.image}
            alt="Profile Image of the Contract"
            className={styles.mainProfileImage} // Add the mainProfileImage class here
          />
          <div className={styles.contractInfo}>
            {/* Display additional contract info, e.g., contract name, description */}
            <h2></h2>
            <p></p>
          </div>
        </div>
      )}

      <div className={styles.coverPhoto}>
        {/* Add the cover photo image here */}
        <Image
          src="/images/shop.jpg"
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          style={{ opacity: 0.4 }} // Adjust the opacity value (0.0 to 1.0)
        />
      </div>

      <div className={styles.overlayContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            🔗 {""}
            <span className={styles.gradientText0}>
              <a
                href="https://www.z1nkx.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Z1NKX
              </a>
            </span>
          </h1>

          <div className={styles.socialHandles}>
            {/* Social Media Icons */}
            {socialMediaData.map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={platform.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        <p className={styles.description}>
          {/* Existing description */}
          &#128293; Blockchain Developer / NFT Enthusiast / Ethical Hacker &#128274;
          &#128640; Passionate about blockchain, NFTs, and cybersecurity. &#128161; Turning
          ideas into smart contracts. &#127912; Exploring the digital art revolution.{" "}
          &#128274; Securing the digital world ethically. Let&apos;s connect!{" "}
        </p>


      </div>

      {/* Link Buttons */}
      <div className={styles.linkButtons}>
        {linkButtons.map((button) => (
          <a
            key={button.label}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            {button.label}
          </a>
        ))}
      </div>

     
    </main>
  );
};

export default Home;