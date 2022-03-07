import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box } from "@mui/system";

export function Notification() {
  const [showHeading, setshowHeading] = useState(true);
  return (
    <div>
      {showHeading ? (
        <div className="notification">
          <Box
            variant="text"
            sx={{
              marginLeft: "auto",
              textAlign: "center",
              color: "black",
              fontSize: "15px",
            }}
          >
            ⚡️ Transform your spreadsheet data into a powerful search and
            insights engine in seconds with Polymer Search. Learn More
          </Box>
          <CancelIcon
            sx={{ marginLeft: "auto", textAlign: "center", color: "red" }}
            onClick={() => setshowHeading(false)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
