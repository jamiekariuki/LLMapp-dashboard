"use client";
import React, { useState } from "react";
import "./users.overview.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AddUser from "./add user/add.user";
import DeleteAllUser from "./delete all user/delete.all.user";

const UsersOverview = () => {
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	const [open2, setOpen2] = useState(false);
	const onClose2 = () => {
		setOpen2(false);
	};

	return (
		<div className="users-overview">
			<div className="users-count-data">
				<div className="totals">
					<div className="totals-title">
						<p>Total all users</p>
					</div>
					<div className="totals-data">
						<h3>10</h3>
					</div>
				</div>

				<div className="totals">
					<div className="totals-title">
						<p>Total super admins</p>
					</div>
					<div className="totals-data">
						<h3>2</h3>
					</div>
				</div>

				<div className="totals">
					<div className="totals-title">
						<p>Total admins</p>
					</div>
					<div className="totals-data">
						<h3>3</h3>
					</div>
				</div>

				<div className="totals">
					<div className="totals-title">
						<p>Total users</p>
					</div>
					<div className="totals-data">
						<h3>5</h3>
					</div>
				</div>
			</div>
			<div className="users-buttons">
				<Button
					variant="outlined"
					size="small"
					startIcon={<AddIcon />}
					onClick={() => {
						setOpen(true);
					}}
				>
					<h6 className="user-h6">ADD USER</h6>
				</Button>
				<AddUser open={open} onClose={onClose} />

				<Button
					variant="contained"
					color="error"
					size="small"
					startIcon={<DeleteIcon />}
					onClick={() => {
						setOpen2(true);
					}}
				>
					<p className="user-p">DELETE ALL</p>
				</Button>
				<DeleteAllUser open={open2} onClose={onClose2} />
			</div>
		</div>
	);
};

export default UsersOverview;