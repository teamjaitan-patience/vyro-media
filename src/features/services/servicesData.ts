export type MediaType = 'youtube' | 'youtube-short' | 'instagram' | 'website' | 'image';

export interface ServiceMedia {
  id: string;
  type: MediaType;
  title: string;
  url?: string;
  thumbnail?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  desc: string;
  media: ServiceMedia[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "01",
    slug: "Brand Films & Documentaries",
    title: "Brand Films & Documentaries",
    desc: "Long-form storytelling that builds deep trust and unshakeable authority. Think Netflix, but for your business.",
    media: [
      { id: "nrF98yJX0Y4", type: "youtube", title: "Trance", url: "https://youtu.be/nrF98yJX0Y4" },
      { id: "5SAv9-umwbk", type: "youtube", title: "Chaipaani", url: "https://youtu.be/5SAv9-umwbk" },
      { id: "yTq2IXW8Mq8", type: "youtube", title: "Uncle Sam Lives Here", url: "https://youtu.be/yTq2IXW8Mq8" },
      { id: "HaZRxC1X4zU", type: "youtube", title: "Void", url: "https://youtu.be/HaZRxC1X4zU" },
      { id: "jK92i7-OitE", type: "youtube", title: "Hold My Hand", url: "https://youtu.be/jK92i7-OitE" },
      { id: "vwzlXWcUFLE", type: "youtube", title: "Sunday Brother", url: "https://youtu.be/vwzlXWcUFLE" },
      { id: "Bo2PPoP_kFQ", type: "youtube", title: "Khaa Jaao", url: "https://youtu.be/Bo2PPoP_kFQ" },
      { id: "9APypvzN-MI", type: "youtube", title: "Clap", url: "https://youtu.be/9APypvzN-MI" },
      { id: "lxY4zt0BT6M", type: "youtube", title: "The Book", url: "https://youtu.be/lxY4zt0BT6M" },
    ],
  },
  {
    id: "02",
    slug: "High-End Short Form",
    title: "High-End Short Form",
    desc: "Reels and Shorts shouldn't look cheap. We produce cinematic vertical content that algorithms love and audiences respect.",
    media: [
      // YouTube Shorts
      { id: "OWri1AWXLyc", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/OWri1AWXLyc" },
      { id: "8Dpx9x81VNc", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/8Dpx9x81VNc" },
      { id: "3xTByr64mI8", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/3xTByr64mI8" },
      { id: "imEHzsXE0k4", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/imEHzsXE0k4" },
      { id: "hquyxOBm9Ck", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/hquyxOBm9Ck" },
      { id: "EgT6Rk0mBGI", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/EgT6Rk0mBGI" },
      { id: "XYEM9c5adkI", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/XYEM9c5adkI" },
      { id: "M9L74ktwL7I", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/M9L74ktwL7I" },
      { id: "fTXI1OXF6t0", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/fTXI1OXF6t0" },
      { id: "6ZBn7vkg_Ao", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/6ZBn7vkg_Ao" },
      { id: "zp_o1hkz-yM", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/zp_o1hkz-yM" },
      { id: "SVX2El8hcnw", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/SVX2El8hcnw" },
      { id: "J3N9LJitgBA", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/J3N9LJitgBA" },
      { id: "OBRjOVImyes", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/OBRjOVImyes" },
      { id: "LAYc_VoCZMA", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/LAYc_VoCZMA" },
      { id: "4aabs7ljJDg", type: "youtube-short", title: "Short", url: "https://youtube.com/shorts/4aabs7ljJDg" },
      // Instagram Reels
      { id: "CzYAICdI5Ln", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/CzYAICdI5Ln/", thumbnail: "/thumbnails/instagram/CzYAICdI5Ln.jpg" },
      { id: "CzJLt0qo5AW", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/CzJLt0qo5AW/", thumbnail: "/thumbnails/instagram/CzJLt0qo5AW.jpg" },
      { id: "C0DpcN_ymoT", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C0DpcN_ymoT/", thumbnail: "/thumbnails/instagram/C0DpcN_ymoT.jpg" },
      { id: "C0BPK3DSxXY", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C0BPK3DSxXY/", thumbnail: "/thumbnails/instagram/C0BPK3DSxXY.jpg" },
      { id: "Cy_bTrOIPQA", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/Cy_bTrOIPQA/", thumbnail: "/thumbnails/instagram/Cy_bTrOIPQA.jpg" },
      { id: "C0nElDBPVpq", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C0nElDBPVpq/", thumbnail: "/thumbnails/instagram/C0nElDBPVpq.jpg" },
      { id: "C1TFnQrCGMc", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C1TFnQrCGMc/", thumbnail: "/thumbnails/instagram/C1TFnQrCGMc.jpg" },
      { id: "C1ns5NnCIDC", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C1ns5NnCIDC/", thumbnail: "/thumbnails/instagram/C1ns5NnCIDC.jpg" },
      { id: "C19Rolri7ZL", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C19Rolri7ZL/", thumbnail: "/thumbnails/instagram/C19Rolri7ZL.jpg" },
      { id: "C2JMdiVieJp", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C2JMdiVieJp/", thumbnail: "/thumbnails/instagram/C2JMdiVieJp.jpg" },
      { id: "C2MHOZ4i0kx", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C2MHOZ4i0kx/", thumbnail: "/thumbnails/instagram/C2MHOZ4i0kx.jpg" },
      { id: "C2T_d9xiLG4", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/C2T_d9xiLG4/", thumbnail: "/thumbnails/instagram/C2T_d9xiLG4.jpg" },
      { id: "DX9TUBzyIlt", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/DX9TUBzyIlt/", thumbnail: "/thumbnails/instagram/DX9TUBzyIlt.jpg" },
      { id: "DXyY0IdSzWx", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/DXyY0IdSzWx/", thumbnail: "/thumbnails/instagram/DXyY0IdSzWx.jpg" },
      { id: "DH5uY1OTFEL", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/DH5uY1OTFEL/", thumbnail: "/thumbnails/instagram/DH5uY1OTFEL.jpg" },
      { id: "DIS2XNrTgKQ", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/DIS2XNrTgKQ/", thumbnail: "/thumbnails/instagram/DIS2XNrTgKQ.jpg" },
      { id: "DJGb6qvzP9f", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/DJGb6qvzP9f/", thumbnail: "/thumbnails/instagram/DJGb6qvzP9f.jpg" },
      { id: "DJbBGJPCXPa", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/DJbBGJPCXPa/", thumbnail: "/thumbnails/instagram/DJbBGJPCXPa.jpg" },
      { id: "DPntviLkve4", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/DPntviLkve4/", thumbnail: "/thumbnails/instagram/DPntviLkve4.jpg" },
    ]
  },
  {
    id: "03",
    slug: "Websites & Landing Pages",
    title: "Websites & Landing Pages",
    desc: "Your digital storefront. We design and build high-performance, beautiful websites optimized for conversion and speed.",
    media: [
      { id: "pratham", type: "website", title: "Pratham Kochhar", url: "https://www.prathamkochhar.com/", thumbnail: "/pratham.png" },
      { id: "gori", type: "website", title: "Gori Katyagi", url: "https://www.gorikatyagi.in/", thumbnail: "/gori.png" },
      { id: "exotica", type: "website", title: "Exotica Productions", url: "https://www.exoticaproductions.com/", thumbnail: "/exotica.png" },
    ]
  },
  {
    id: "04",
    slug: "Podcast Production",
    title: "Podcast Production",
    desc: "From studio setup to post-production mixing and multi-cam editing, we make your show look and sound world-class.",
    media: [
      { id: "hfUesj-2m8U", type: "youtube", title: "Brand Film", url: "https://youtu.be/hfUesj-2m8U" },
      { id: "JfvavSfr9hk", type: "youtube", title: "Commercial", url: "https://youtu.be/JfvavSfr9hk" },
      { id: "W4wMkKqzf3Q", type: "youtube", title: "Creative Short", url: "https://youtu.be/W4wMkKqzf3Q" },
      { id: "I6L-qWew04I", type: "youtube", title: "Cinematic Reel", url: "https://youtu.be/I6L-qWew04I" },
      { id: "mCW2M0WrDJY", type: "youtube", title: "Brand Documentary", url: "https://youtu.be/mCW2M0WrDJY" },
      { id: "vwHebOinZbM", type: "youtube", title: "Trending Content", url: "https://youtu.be/vwHebOinZbM" },
    ]
  },
  {
    id: "05",
    slug: "Designs",
    title: "Designs",
    desc: "Striking visual identities, high-converting thumbnails, and branding that makes you impossible to ignore.",
    media: [
      { id: "thumb1", type: "image", title: "Design", thumbnail: "/thumbnails/5tGk7ceu0hk2GEUF7D54qQ8lE.avif" },
      { id: "thumb2", type: "image", title: "Design", thumbnail: "/thumbnails/7KaLKDVOrATDwIgIYVKTVY.webp" },
      { id: "thumb3", type: "image", title: "Design", thumbnail: "/thumbnails/7pQajNxM8uexViFPsexyMQSfyuo.webp" },
      { id: "thumb4", type: "image", title: "Design", thumbnail: "/thumbnails/97H2cx8bO1YjpkWiPeE7OTuYpdg.webp" },
      { id: "thumb5", type: "image", title: "Design", thumbnail: "/thumbnails/BwYWXVcPTor5h03HYPLSniV7I.webp" },
      { id: "thumb6", type: "image", title: "Design", thumbnail: "/thumbnails/HAkEHc7wB7CPbpANvyUIbY4nJFs.webp" },
      { id: "thumb7", type: "image", title: "Design", thumbnail: "/thumbnails/LJkv1zxDiBExv7731tbLdGfJk.webp" },
      { id: "thumb8", type: "image", title: "Design", thumbnail: "/thumbnails/M1MbyBIisxGLXSHZv2ChM6VUaA.webp" },
      { id: "thumb9", type: "image", title: "Design", thumbnail: "/thumbnails/NpY9XM3xgWC3c5EHHrrR0Reh33I.webp" },
      { id: "thumb10", type: "image", title: "Design", thumbnail: "/thumbnails/OBqqggO82JwuDCmnDRhxC89cE.webp" },
      { id: "thumb11", type: "image", title: "Design", thumbnail: "/thumbnails/RPnL3uT0uhYBQnkmLXKiZfSW6tg.avif" },
      { id: "thumb12", type: "image", title: "Design", thumbnail: "/thumbnails/Rp3FQ6CNPaLqDjPvi41XGWpza0.avif" },
      { id: "thumb13", type: "image", title: "Design", thumbnail: "/thumbnails/azJ913p5SBRFuQHmcsWxygKQXM.webp" },
      { id: "thumb14", type: "image", title: "Design", thumbnail: "/thumbnails/dlZuCX6Rieziz9Yg9C9cFwKvAJM.webp" },
      { id: "thumb15", type: "image", title: "Design", thumbnail: "/thumbnails/g1z2XByat4LLK2EQrvvH6C7DQY.avif" },
      { id: "thumb16", type: "image", title: "Design", thumbnail: "/thumbnails/gC5SrL5aQ6WbjVoIvd6ojOlCJY.avif" },
      { id: "thumb17", type: "image", title: "Design", thumbnail: "/thumbnails/h2i9hAlrmLW2B8vCUdF3lc7FFU.avif" },
      { id: "thumb18", type: "image", title: "Design", thumbnail: "/thumbnails/k1dZdatJe98po6ursBT0BKVsS2I.avif" },
      { id: "thumb19", type: "image", title: "Design", thumbnail: "/thumbnails/lrtOZvw7AeL8zbHJtMZsfUgWmg.avif" },
      { id: "thumb20", type: "image", title: "Design", thumbnail: "/thumbnails/o9YENTt1zQ7tHhjDaJHv2rkFwks.avif" },
      { id: "thumb21", type: "image", title: "Design", thumbnail: "/thumbnails/rEpOUOrc2hFsae6KrIzCj18iUt8.avif" },
      { id: "thumb22", type: "image", title: "Design", thumbnail: "/thumbnails/s15iDxQT6rUAWuStkZZCh4uWY68.avif" },
    ]
  }
];
