// pages/index.tsx
import { ConnectWallet, ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
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
  // Add more social media platforms as needed
];


const linkButtons = [
  {
    label: "Opensea",
    link: "https://example.com/button1",
  },
  
 
  // Add more buttons as needed
];

const Home: NextPage = () => {
  const { contract } = useContract('0x185E6dA7F560A08d12C640D795C8ea5B3F658Df7', 'edition-drop');
  const { data: nfts, isLoading: loadingNfts } = useNFTs(contract);

  return (
    <main className={styles.main}>
      <div className={styles.coverPhoto}>
        {/* Add the cover photo image here */}
        <Image
          src="/images/z1.png"
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          style={{ opacity: 0.3 }} // Adjust the opacity value (0.0 to 1.0)
        />
      </div>

      <div className={styles.overlayContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            DLINK🔗{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Z1NKX.
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
  &#128293; Blockchain Developer / NFT Enthusiast / Ethical Hacker &#128274;
  &#128640; Passionate about blockchain, NFTs, and cybersecurity. &#128161; Turning
  ideas into smart contracts. &#127912; Exploring the digital art revolution.{" "}
  &#128274; Securing the digital world ethically. Let&apos;s connect!{" "}
</p>



        <div className={styles.connect}>
          <ConnectWallet
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
        </div>
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

      <div className={styles.grid}>
        {/* NFT Grid */}
        {!loadingNfts && nfts && (
          <>
            {nfts.map((nft) => (
              <Link key={nft.metadata.id} href={`/artwork/${nft.metadata.id}`}>
                <div className={styles.artCard}>
                  <ThirdwebNftMedia metadata={nft.metadata} />
                  <div className={styles.cardContent}>
                    <h3>{nft.metadata.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
