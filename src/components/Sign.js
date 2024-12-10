import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Sign = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");

	const navigate = useNavigate();
	const [loaders, setLoaders] = useState(false);

	useEffect(() => {
		setLoaders(true);
		setTimeout(() => {
			setLoaders(false);
		}, 1000);
	}, []);


	if (loaders) {
		return (
			<ClipLoader
				color={"#ef0e0e"}
				loading={loaders}
				cssOverride={300}
				size={100}
				aria-label="Loading Spinner"
				data-testid="loader"
				className="mt-5"
			/>
		);
	}

	const SUBMIT = async (e) => {
		e.preventDefault();

		if (!name || !email || !password || !address) {
			alert("ALL INFORMATION ARE REQUIRED");
			return;
		}

		// Log user details to the console
		console.log("User Details:", { name, email, password, address });

		try {
			let result = await fetch("http://localhost:4000/signIn", {
				// Updated URL
				method: "post",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
					address,
				}),
			});

			if (result.ok) {
				toast.success("Thanks for ordering!", {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					className: "text-center fw-bolder",
				});

				navigate("/");
			}

			result = await result.json();
			console.log("Server Response:", result); // Log server response for debugging
		} catch (error) {
			console.error("Error:", error);
			toast.error("Sign-in failed. Please try again later.", {
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				className: "text-center fw-bolder",
			});
		}
	};

	return (
		<div
			style={{
				backgroundImage: `url('/Assets/baby-sneakers-wooden_1323-281.avif')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<form
				className="bg-dark text-white p-4 rounded shadow"
				style={{ maxWidth: "400px", width: "100%" }}
			>
				<h1 className="text-center fw-bold mb-4">
					<i>ShoeEnvy Form</i>
				</h1>

				{/* Name Input */}
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>

				{/* Email Input */}
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				{/* Password Input */}
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				{/* Address Input */}
				<div className="mb-3">
					<label htmlFor="address" className="form-label">
						Address
					</label>
					<input
						type="text"
						className="form-control"
						id="address"
						placeholder="Enter your address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</div>

				{/* Submit Button */}
				<button
					type="button"
					className="btn btn-success w-100"
					onClick={SUBMIT}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Sign;
