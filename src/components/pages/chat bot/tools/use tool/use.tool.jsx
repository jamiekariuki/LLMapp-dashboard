"use client";
import React, { useState } from "react";
import "./use.tool.scss";
import { Button, IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TuneIcon from "@mui/icons-material/Tune";
import MessageInput from "./message input/message.input";
import Messages from "./messages/messages";
import ConfigureTool from "../configure tool/configure.tool";
import { useRouter } from "next/navigation";
import MessageHistory from "./message history/message.history";
import LastPageIcon from "@mui/icons-material/LastPage";

const UseTool = ({ urlTitle }) => {
	const [openConfigure, setOpenConfigure] = useState(false);
	const onCloseConfigure = () => {
		setOpenConfigure(false);
	};
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(!open);
	};

	return (
		<div className="use-tool">
			<div className="use-tool-header">
				<IconButton
					aria-label="go back"
					size="small"
					onClick={() => router.back()}
				>
					<KeyboardBackspaceIcon className="ut-back-icon" />
				</IconButton>

				<h2>{urlTitle}</h2>
				<Button
					variant="contained"
					startIcon={<TuneIcon />}
					size="small"
					className="ut-add-btn "
					disableElevation
					onClick={() => {
						setOpenConfigure(true);
					}}
				>
					<p>configure</p>
				</Button>

				<ConfigureTool
					open={openConfigure}
					onClose={onCloseConfigure}
				/>
			</div>

			<div className="use-tool-container">
				<div className="ut-left">
					<MessageHistory />
				</div>
				<div className="ut-right">
					<div className="ut-mobile-nav">
						<Button
							startIcon={
								<LastPageIcon className="ut-mobile-icon " />
							}
							size="small"
							className="ut-mobile-btn "
							disableElevation
							onClick={onClose}
						>
							<p>history</p>
						</Button>
						<h2>{urlTitle}</h2>
					</div>

					<div
						className="ut-mobile-history"
						style={{
							transform: open && "translateX(0%)",
						}}
					>
						<MessageHistory onClose={onClose} />
					</div>
					<div className="ut-message-container">
						<Messages />
					</div>

					<div className="ut-type-message">
						<div className="m-input">
							<MessageInput />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UseTool;