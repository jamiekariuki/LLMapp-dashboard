"use client";
import React, { useState } from "react";
import "./agents.scss";
import AgentsSearch from "./agents search/agents.search";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import MoreInfo from "@/components/styled components/menu/more.info";
import EditAgent from "./edit agent/edit.agent";
import DeleteAgent from "./delete agent/delete.agent";
import CreateAgent from "./create agent/create.agent";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { GoWorkflow } from "react-icons/go";

const Agents = () => {
	const agents = [
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Chat with Documents",
			status: "Processing...",
			stack: [
				"whatsApp",
				"google calender",
				"AI",
				"google calender",
				"google spread-sheet",
			],
		},
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Chat with Website",
			status: "Ready",
			stack: [
				"Instagram",
				"Gmail",
				"AI",
				"google calender",
				"google spread-sheet",
			],
		},
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Queued",
			status: "Ready",
			stack: ["AI", "google calender", "google spread-sheet"],
		},
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Chat with Attorney",
			status: "Ready",
			stack: ["whatsApp", "google spread-sheet"],
		},
	];

	const [indexIt, setIndexIt] = useState(null);

	const menus = ["Edit", "Delete"];

	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	const [openDelete, setOpenDelete] = useState(false);
	const onCloseDelete = () => {
		setOpenDelete(false);
	};

	const menuInfo = (x) => {
		setOpen(x === "Edit" && true);
		setOpenDelete(x === "Delete" && true);
	};

	const [openCreate, setOpenCreate] = useState(false);
	const onCloseCreate = () => {
		setOpenCreate(false);
	};

	return (
		<div className="agents">
			<AgentsSearch />

			<div className="agents-title">
				<h1>Agents hub</h1>
				<p>
					Feel free to create custom agents or add built agents
					through templates
				</p>
			</div>

			<div className="agents-container">
				<div
					className={
						agents.length > 2 ? "cb-tools cb-tools2" : "cb-tools"
					}
				>
					{agents.map((item, index) => (
						<div className="agent-box" key={index}>
							<div className="agent-box-container">
								<div className="agent-header">
									<div className="agent-avatar-container">
										<Image
											alt="agent avatar"
											src={item.avatar}
											fill={true}
											className="agent-avatar"
											quality={20}
										/>
									</div>

									<div className="agent-select">
										<div
											onClick={() => {
												setIndexIt(index);
											}}
										>
											<MoreInfo
												list={menus}
												func={menuInfo}
											/>
										</div>

										{open && indexIt === index && (
											<EditAgent
												open={open}
												onClose={onClose}
												agentTitle={item.title}
												avatar={item.avatar}
											/>
										)}

										{openDelete && indexIt === index && (
											<DeleteAgent
												open={openDelete}
												onClose={onCloseDelete}
											/>
										)}
									</div>
								</div>

								<div className="agent-title">
									<h3>{item.title}</h3>
								</div>

								<div className="agent-status">
									<p>
										status: <span>{item.status}</span>{" "}
									</p>
								</div>

								<div className="agent-stack">
									{item.stack.map((item, index) => (
										<div
											className="stack-wrapper"
											key={index}
										>
											<p>{item}</p>
										</div>
									))}
								</div>
							</div>

							<div className="agent-box-buttons">
								<Button
									variant="contained"
									startIcon={
										<GoWorkflow className="agent-box-icon" />
									}
									size="small"
									className="agent-box-btn "
									disableElevation
								>
									<p>work flow</p>
								</Button>
							</div>
						</div>
					))}

					<div
						className="agent-box-add"
						onClick={() => {
							setOpenCreate(true);
						}}
					>
						<div className="tb-add">
							<AddIcon className="tb-add" />
							<h4>Create custom Agent</h4>
						</div>
					</div>
					<CreateAgent open={openCreate} onClose={onCloseCreate} />
				</div>
			</div>
		</div>
	);
};

export default Agents;