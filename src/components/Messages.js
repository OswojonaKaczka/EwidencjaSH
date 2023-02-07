import React, { useState, useEffect } from "react";
import Title from "./Title";
import {
  Alert,
  Card,
  CardContent,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { getAllMessages } from "../api/messages.api";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionType } from "@azure/msal-browser";

export default function Messages() {
  const { inProgress } = useMsal();
  const [messagesData, setMessagesData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!messagesData && inProgress == InteractionStatus.None) {
      getAllMessages()
        .then((response) => setMessagesData(response))
        .catch((error) => {
          setError(true);
        });
    }
  }, [inProgress]);

  return (
    <>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>Aktualności</Title>
        {!messagesData ? (
          <div style={{ textAlign: "center" }}>
            {!error ? (
              <CircularProgress color="secondary" />
            ) : (
              <>
                <Alert severity="error">Błąd połączenia z API!</Alert>
              </>
            )}
          </div>
        ) : (
          <>
            {messagesData.count == 0 ? (
              <div style={{ textAlign: "center" }}>
                <Alert severity="warning">Brak aktualności!</Alert>
              </div>
            ) : (
              <>
                {messagesData.rows.map((message, index) => (
                  <>
                    <Card
                      color="primary"
                      style={{ backgroundColor: message.category.color }}
                      key={index}
                      sx={{mt: 3}}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14, mt: 2 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {message.category.category}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {message.topic}
                        </Typography>
                        <Typography variant="body2">
                          {message.content}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14, mt: 2 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {message.author.name} |{" "}
                          {message.createdAt.split("T")[0]}{" "}
                          {message.createdAt.substring(11).split(".")[0]}
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                ))}
              </>
            )}
          </>
        )}
      </Paper>
    </>
  );
}
