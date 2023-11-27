"use client";
import React from "react";
import "./edit.agent.scss";
import Modal from "@/components/styled components/modals/modal";
import Inputs from "@/components/styled components/inputs/inputs";
import Image from "next/image";
import { Button } from "@mui/material";

const EditAgent = ({ open, onClose, agentTitle, avatar }) => {
	return (
		<Modal open={open} onClose={onClose} title={"Edit Agent"}>
			<div className="edit-agent">
				<div className="edit-agent-container">
					<form /* onSubmit={handleSubmit} */>
						<label htmlFor="profilePicture">
							<div className="profile-wrapper-input">
								<Image
									className="profile-image-input"
									src={avatar}
									alt="avatar"
									fill={true}
								/>
								<input
									type="file"
									id="profilePicture"
									name="profilePicture"
									hidden
								/>

								<div className="upload-text">
									<h6>
										Upload <br /> Photo
									</h6>
								</div>
							</div>
						</label>
					</form>

					<div className="edit-wrapper">
						<h4>Edit your Agent Name</h4>

						<Inputs
							label={"Title"}
							type={"text"}
							value={agentTitle}
						/>
					</div>
				</div>

				<div className="edit-agent-footer">
					<Button
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={onClose}
					>
						<p>submit</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default EditAgent;
