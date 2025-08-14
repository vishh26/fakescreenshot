
import React, { useRef } from "react";
import log from "./assets/images/log.jpg";
import wallpaper from './assets/images/wallpaper1.jpg'
import { BatteryMedium, Lock, Wifi } from "lucide-react";
import paypalLogo from "./assets/images/paypalLogo.png";
import stripelogo from "./assets/images/stripeLogo.png";
import xlogos from "./assets/images/xlogo.png";
import html2canvas from "html2canvas"

export default function DataonImg({ formData,wallpaper }) {
  const { sim, date, time, notification, amount, payfrom, timeago } = formData;
  const captureRef = useRef();

  const formattedDate = date
    ? {
        day: new Date(date).getDate(),
        month: new Date(date).toLocaleDateString("en-GB", { month: "short" }),
        year: new Date(date).getFullYear(),
        weekday: new Date(date)
          .toLocaleDateString("en-GB", { weekday: "long" })
          .substring(0, 3),
      }
    : {};

  const logos = {
    Paypal: paypalLogo,
    Stripe: stripelogo,
    xlogo: xlogos,
  };

  const handleDownload = () => {
    html2canvas(captureRef.current, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "wallpaper.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div>
      <div
        ref={captureRef}
        style={{
          position: "relative",
          width: 360,
          height: 640,
          fontFamily: "sans-serif",
        }}
      >
        {/* Wallpaper */}
        <img
          src={wallpaper}
          alt="Wallpaper"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.5rem" }}
        />
     
        {/* Status Bar */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 16px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>{sim}</span>
          <span>
            <Wifi  className="ml-60"/>
          </span>
          <span>
            <BatteryMedium />
          </span>
        </div>

        {/* Notification Card */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 8,
            right: 8,
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(6px)",
            borderRadius: "1rem",
            padding: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {notification && logos[notification] && (
            <img
              src={logos[notification]}
              alt={`${notification} logo`}
              style={{ width: 24, height: 24, marginBottom: 4 }}
            />
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.75rem",
              color: "rgba(107,114,128,1)",
            }}
          >
            <span style={{ fontWeight: "600" }}>{notification || "Stripe"}</span>
            <span>{timeago}h ago</span>
          </div>

          <div style={{ marginTop: 4 }}>
            <p style={{ fontSize: "0.875rem", fontWeight: "bold", color: "rgba(0,0,0,1)" }}>
              You received ${amount} from {payfrom}
            </p>
          </div>
        </div>

        {/* Date on Wallpaper */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <p style={{ fontSize: "2.5rem", fontWeight: 500, margin: 0 }}>
            {formattedDate.weekday}, {formattedDate.day} {formattedDate.month}
          </p>
          <p style={{ fontSize: "2.5rem", fontWeight: 500, marginTop: 16 }}>{time}</p>
        </div>

        {/* Lock Icon */}
        <Lock
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.7)",
          }}
        />

        {/* Download Button */}
        <button
          onClick={handleDownload}
          style={{
            marginTop: 16,
            padding: "8px 16px",
            backgroundColor: "rgba(116, 19, 94, 1)",
            color: "#fff",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            marginRight:"100px",
          }}
        >
          Download screenShot
        </button>
      </div>
    </div>
  );
}

