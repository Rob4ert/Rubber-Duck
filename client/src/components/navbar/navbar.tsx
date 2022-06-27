import React from "react";
import "./navbar.scss";
import logout from "../../Images/logout.png";
import profile from "../../Images/profile.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="small-logo">
        <img
          className="logo-img"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxwYXRoIGQ9Im0yNTEuNTggNDkxLjZjLTQuMjYxNy0xNy44OTEtOS44MTY0LTM1LjM3NS0xMi40NDEtNTMuMjk3LTkuMDI3My02MS42NDUgNy42NjQxLTExMy4zNiA2MS4xNDgtMTQ5LjY4IDMuNS0yLjM3MTEgNC4xMDk0LTQuNDE0MSAyLjY0NDUtOC4zNTk0LTEuNjc1OC00LjUwMzktMi44MDQ3LTkuMzg2Ny0zLjE1MjMtMTQuMTgtMC44NzEwOS0xMS45NzcgNS41MjM0LTE4Ljc3IDE3LjUtMTkuMzcxIDEuMTYwMi0wLjA2MjUgMi4zMjAzLTAuMTY0MDYgMy42MzI4LTAuMjY1NjItMC4yNzM0NC01LjI1MzktMC43NjU2Mi0xMC4wNTktMC43MTg3NS0xNC44NjcgMC4wNjI1LTcuMjg5MSAxLjMyNDItMTQuMzI0IDguNTAzOS0xOC4yMDMgNy41NzQyLTQuMDg1OSAxNC41NzgtMS4xNDA2IDIwLjI5NyAzLjY1MjMgOC41NDY5IDcuMTYwMiAxNi4zNDggMTUuMjA3IDI0Ljk4IDIzLjM2NyA3LjQ5MjItNS40NTcgMTMuOTA2LTEuMjkzIDE5LjYyOSA0LjY1MjMgNC4yMTQ4IDQuMzcxMSA3LjY5OTIgOS40NTMxIDExLjk1NyAxMy43ODEgMy41NjY0IDMuNjEzMyA3Ljc4MTIgNi41OTc3IDEyLjM5OCAxMC40MzggMS42NDg0LTMuNjM2NyAyLjUwMzktNS41MzUyIDMuNjQwNi04LjAzNTItMTQuMzM2LTcuNzUzOS0yMi41ODItMTkuNzY2LTI2LjExNy0zNS4yNTQtNy44Nzg5LTM0LjQ2OSAxOC4wMDQtNjIuODA1IDUyLjY3Ni01Ny41ODYgNi40OTYxIDAuOTc2NTYgMTMuMTMzIDEuMzMyIDE5LjQ4NCAyLjg4MjggMjkuMTk5IDcuMTMyOCA0Ny4zMDEgMzAuNjQ4IDQ2LjcxMSA2MS42MjktMC4xNzU3OCA4LjkyNTggMi4yNjU2IDE0Ljc5MyA4LjcxMDkgMjEuMzEyIDE3LjQ2NSAxNy42NiAyNS44NDQgMzguOTM4IDE3LjU3OCA2My44NjctMS44OTQ1IDUuNzE0OC02Ljk2MDkgMTAuMzI0LTEwLjEzMyAxNS42OTktMS4yMzQ0IDIuMDkzOC0yLjMxNjQgNS4yMzQ0LTEuNjY0MSA3LjMzNTkgNC4zMjgxIDEzLjg4NyAxMi4zMzYgMjUuMjU4IDI0Ljc2MiAzMy4zMDktMC40NDUzMSAwLjY5NTMxLTAuODg2NzIgMS4zOTg0LTEuMzMyIDIuMDk3Ny04LjE0MDYtNC41NDY5LTE2LjI4NS05LjA5MzgtMjUuOTQ5LTE0LjQ5MiA2LjIyMjcgMTAuNDQxIDExLjk0NSAyMC4wNDcgMTcuNzU0IDI5Ljc5My0xMS4wMzUtMi41NDY5LTIwLjUzNS04LjcxMDktMjUuNzgxLTE4Ljg5NS00LjgwMDgtOS4zMzU5LTcuNDIxOS0xOS44NzUtMTAuMjQyLTMwLjA5OC0xLjAwMzktMy42MzY3LTIuMTgzNi01LjUzMTItNS42MjUtNy4zMDA4LTYuNzgxMi0zLjQ5MjItMTMuMDM5LTguMDA3OC0xOS40MzgtMTIuMDQzLTAuMDIzNDM4IDAuMTk5MjItMC4yNzM0NCAwLjc1NzgxLTAuMDkzNzUgMS4wNjY0IDI1LjM5OCA0My41OTQgMjUuNTQ3IDg5LjkzIDE0LjY5MSAxMzcuMzYtMi4yMjI3IDkuNzAzMS01LjY2OCAxOS4xMTctOC4xODc1IDI4Ljc2Mi0wLjU2NjQxIDIuMTY4LTAuNDc2NTYgNS4zOTg0IDAuNzY1NjIgNy4wMDM5IDEyLjM1OSAxNS45MjYgOC4xMDE2IDM2LjI5Ny05LjUgNDUuNzM0LTMuNTU0NyAxLjkxMDItNi4xMDE2IDUuNjMyOC05LjQyNTggOC4wODk4LTMuMjI2NiAyLjM4MjgtNi44NDc3IDQuMjM0NC0xMC4zMjQgNi4yNzM0LTAuMzk0NTMgMC4yMjY1Ni0wLjk1NzAzIDAuMTQ4NDQtMS40Mjk3IDAuMjUtMTIuMTI1IDIuNzIyNy0yMy44Mi02LjEyODktMzYuNzMgMC4zNDc2Ni0xMS4xMDUgNS41NzQyLTIzLjg0NCA4LjU1ODYtMzYuMTk5IDEwLjgxNi0yNy44NTUgNS4wOTc3LTU0Ljc3IDIuMDcwMy03OS44OTUtMTIuMjgxLTIuNzkzLTEuNTg5OC02LjkzMzYtMS40MDIzLTEwLjM5MS0xLjE2MDItNy4yNjk1IDAuNTA3ODEtMTQuNDggMi4wMzUyLTIxLjc1IDIuMzI0Mi03LjE4NzUgMC4yODUxNi0xMy4yMDMtMi4xNjAyLTE2LjcyMy05LjQxMDItMS4wNzQyLTIuMjEwOS00LjIxNDgtMy42NzE5LTYuNjg3NS00LjkxNDEtMTQuMjQ2LTcuMTg3NS0xOC4yMTEtMTUuMTAyLTE2LjkxLTMyLjk2MSAwLjY3OTY5LTkuMjM4MyA1LjM5NDUtMTMuNSAxNy4zNzUtMTkuMTkxem01OC4wNTEtMTk0LjZjLTI3LjUwNCAxNy43NjYtNDYuNjI5IDQwLjkxNC01NS4zMjQgNzEuODg3LTEwLjAzOSAzNS43NzctNS4zMDA4IDcwLjg0NCA1LjYyNSAxMDUuNiAyLjk2NDggOS40Mjk3IDYuMTkxNCAxNi4wNTEgMTcuNjg0IDE5LjY0MSAxOS43MTUgNi4xNjAyIDM3LjY3MiA0LjIzMDUgNTUuMDA4LTQuNzQyMiAyMi4xNDgtMTEuNDUzIDQzLjM1NS0xMS41ODIgNjUuNDU3LTAuMDIzNDM3IDE2LjE0NSA4LjQzNzUgMzMuMzQ4IDExLjYzNyA1MS41MTYgNS43NzM0IDYuNjA1NS0yLjEzMjggMTMuNjI5LTMuNDkyMiAyMC41NDMtMy45MzM2IDQuNjIxMS0wLjI5Mjk3IDYuNjg3NS0xLjM5ODQgOC4xOTE0LTUuODk0NSAxMC41NjItMzEuNTA4IDE2LjM3MS02My42MjEgMTIuODQtOTYuOTM4LTQuOTUzMS00Ni43NTgtMjguMTY0LTgxLjUtNjkuNDA2LTEwNC43LTQuNzkzIDYuNjQwNi03Ljg5NDUgMy43MjY2LTExLjQ3Ny0xLjQ3MjctNi41OTc3LTkuNTk3Ny0xMy42MjEtMTguOTI2LTIwLjc1NC0yOC4xMzctMi4xMTMzLTIuNzI2Ni01LjE3OTctNC43MTA5LTkuNDMzNi04LjQ2NDgtMC4yOTY4NyA0Ljk2ODgtMC44MDg1OSA3LjcyMjctMC41NDI5NyAxMC40MSAwLjMzMjAzIDMuMzY3MiAxLjc4NTIgNi42NzU4IDEuNzg1MiAxMC4wMTIgMCAxLjg4NjctMS45NDUzIDMuNzczNC0zLjAxNTYgNS42NjQxLTEuODMyLTEuMTg3NS00LjYzMjgtMS45ODA1LTUuMzA4Ni0zLjY0MDYtMS41MzkxLTMuNzczNC0xLjgzMi04LjA0My0zLjAzMTItMTEuOTkyLTAuOTUzMTItMy4xMzY3LTEuODkwNi02LjU5MzgtMy44OTQ1LTkuMDM1Mi01LjA4Mi02LjIwNy0xMC4zOTEtMTIuMzI0LTE2LjMwMS0xNy43MTEtNC42MjExLTQuMjA3LTkuNzY5NS0xMS4zMjQtMTYuNjUyLTcuNDA2Mi02LjQ0MTQgMy42NzE5LTQuMzY3MiAxMS43NzMtMy4zNzExIDE4LjE2IDEuNjY0MSAxMC42OTkgMy44NjMzIDIxLjMxNiA1Ljg5NDUgMzIuMjY2LTIuODI0MiAwLjY5MTQxLTUuMjgxMiAxLjI4OTEtOC4wMjM0IDEuOTY0OC0xLjExMzMtNC4xNjQxLTIuNTE1Ni03LjYxMzMtMi44ODI4LTExLjE4LTAuNjI4OTEtNi4wMTk1LTQuMDA3OC04LjA1ODYtOS40MDIzLTcuMjMwNS01LjgzOTggMC44OTg0NC03LjY3MTkgNS4zODI4LTYuNjAxNiAxMC4zMiAxLjQ4MDUgNi44Mzk4IDMuNjI4OSAxMy42MTcgNi4yNSAyMC4xMTMgMi43ODEyIDYuODkwNiA2LjQ0OTIgMTMuNDIyIDkuOTIxOSAyMC41MDgtMi43NjU2IDEuNDUzMS01LjAwMzkgMi42MjUtNy40OTYxIDMuOTI5Ny0yLjYzNjctNC42NzU4LTUuMDExNy04Ljg1MTYtNy43OTY5LTEzLjc1em0tNTIuMTk1IDI0MC43NWMxLjcxODgtMi44MjgxIDIuODEyNS02LjU4MiA1LjMxNjQtOC4zNzg5IDYuODA4Ni00Ljg3ODkgNy44NTE2LTkuMzAwOCAxLjA4OTgtMTQuOTgtMC45ODQzOC0wLjgyNDIyLTAuNjI1LTMuMjQyMi0wLjg5MDYyLTQuOTI1OCAxLjY3NTggMC4zMzIwMyAzLjc1IDAuMTUyMzQgNC45NzY2IDEuMDc4MSA4LjU0MyA2LjQ3MjcgOC44NTE2IDE0LjIyNyAwLjgzOTg0IDIxLjMxMi00LjYzMjggNC4wODU5LTcuNzgxMiA5LjcwNy00LjY5OTIgMTQuNjQ4IDIuMDY2NCAzLjMwMDggOC40MTQxIDQgMTIuOTMgNS42NDg0IDEuMDQzIDAuMzc4OTEgMi40MTQxLTAuMDE5NTMyIDMuNjE3Mi0wLjE5NTMxIDExLjMzMi0xLjU5NzcgMjIuNjQxLTMuMzA4NiAzMy45ODQtNC44MjQyIDI3LjMwOS0zLjY0ODQgNTQuNTYyLTYuOTA2MiA4Mi4xODQtMi40MDIzIDE4Ljk2OSAzLjA5MzggMzguMTA1IDUuMTg3NSA1Ny4yMDcgNy4zODY3IDUuMDg1OSAwLjU4NTk0IDExLjAyIDAuMzA4NTkgMTMuMDk4LTUuNTA3OCAyLjA0NjktNS43MzA1LTAuNDQ5MjItMTAuNzU4LTUuMTEzMy0xNC44NDQtNy43MzQ0LTYuNzY1Ni03Ljc1MzktMTMuNDE4LTAuMDI3MzQzLTIwLjI5MyAxLjQzMzYtMS4yNzczIDMuOTcyNy0xLjMxMjUgNi0xLjkxOC0wLjY3MTg4IDIuMDAzOS0wLjkyMTg4IDQuMzEyNS0yLjEwOTQgNS45NTMxLTIuMjY1NiAzLjE0NDUtNS44MTY0IDUuNzIyNy0yLjAzNTIgMTAuMDI3IDMuNDM3NSAzLjkxOCA2LjgxNjQgNy44ODY3IDEwLjM4NyAxMi4wMiA4LjAxOTUtMi41MzkxIDEyLjQyNi02LjMyODEgMTQuMDU1LTEyLjM5OCA0LjkzNzUtMTguMzQ4LTIuNjc5Ny0yNy44NTItMjEuNzIzLTI2Ljc4MS0zLjgzNTkgMC4yMTQ4NC03Ljg3NSAwLjc2NTYyLTExLjM3OSAyLjIzMDUtMjEuMDgyIDguNzc3My00MS4zOTUgNC45ODA1LTYwLjU2Ni00Ljg0NzctMTkuODkxLTEwLjIwNy0zOC41NTEtMTAuMTMzLTU4LjQyMiAwLjA2MjUtMTguOTI2IDkuNzA3LTM4LjkxIDEzLjEzMy01OS45NjUgNS4yMDMxLTYuMzEyNS0yLjM3ODktMTMuODI4LTIuNDI1OC0yMC43MzQtMi4xMjExLTYuMzMyIDAuMjgxMjUtMTEuNzkzIDMuNzMwNS0xMy40MjIgMTAuNTYyLTIuNTU0NyAxMC43NDYtMC4zMTI1IDI0Ljg0IDE1LjQwMiAyOC4yODV6bTIzMS4xNi0yMjAuNjdjNC40MDYyIDMuMjY5NSA3LjQxOCA1LjcyMjcgMTAuNjU2IDcuODI4MSAyLjQyOTcgMS41NzgxIDUuMDU4NiAyLjk0NTMgNy43NTM5IDQgMTAuNzkzIDQuMjQyMiAxOS4wMTYgMS4xMzI4IDI0LjU0Ny04Ljk1NyA0LjgxNjQtOC43ODUyIDUuMTc1OC0xOC4wMzUgMy41MDM5LTI3LjY1Ni0yLjMwMDgtMTMuMjczLTEwLjU5OC0yNy45MjItMjAuNjMzLTMzLjYzMyAzLjQ0OTIgNi45NzI3IDYuMjQ2MSAxMi4yNSA4LjY0NDUgMTcuNzExIDAuNzMwNDcgMS42NjQxIDAuMzU1NDcgMy44MDg2IDAuNDg0MzggNS43MzQ0LTIuMDU4Ni0wLjQ2NDg0LTUuMTY4LTAuMjQ2MDktNS45OTYxLTEuNTExNy0yLjg5MDYtNC40Mjk3LTYuMzA0Ny05LjE1NjItNy4xMTcyLTE0LjE1Ni0xLjgyMDMtMTEuMTk1LTIuODI4MS0yMi42MTMtMy4wMzUyLTMzLjk1Ny0wLjUxOTUzLTI4Ljg3NS0xNi42NzYtNDkuMDQzLTQ0Ljg4My01NC44MTItNC4yNzM0LTAuODc1LTguNzAzMS0wLjkzNzUtMTMuMDA0LTEuNzE0OC0yOC4zNC01LjEyMTEtNDguOTIyIDEwLjE2NC00Ny4yNDYgNDQuNzM0IDAuNjk1MzEgMTQuNDIyIDguMjE0OCAyNi4wNTEgMjIuMjQyIDMzLjM3OSAxLjY2NDEtNS4xNjggMy4wOTM4LTkuNjE3MiA1LjE3OTctMTYuMDk0IDEzLjI0NiA4LjkzMzYgMjYuMTggMTYuNjY0IDM3Ljk2OSAyNS44NjcgMTIuOTA2IDEwLjA3NCAyMS44NzkgMjMuMzg3IDI2LjMwMSAzOS40NDkgMS40NzI3IDUuMzYzMyAyLjc2OTUgMTAuNTU1LTUuMzY3MiAxMy43ODl6bS03NS4wNzQgMjM2Ljk1Yy0zMS45NzctNi44OTQ1LTYzLjg2My03LjAxOTUtOTcuNzIzLTAuMzYzMjggMzMuODUyIDE1LjEyNSA2NS44MDEgMTIuMzE2IDk3LjcyMyAwLjM2MzI4eiIvPgogIDxwYXRoIGQ9Im0zNTIuMTcgNDI5LjE2Yy0yLjI3MzQgNi43OTY5LTMuNjI4OSAxNC4xMDItNy4wNDMgMjAuMjY2LTUuMzk4NCA5Ljc1LTE1LjM5NSAxMC4zMDktMjMuMDI3IDIuMzEyNS0xMC45NDktMTEuNDc3LTEyLjYwMi0zNi4zMzYtMy4yNjE3LTQ5LjAxNiA2LjE2OC04LjM2NzIgMTUuMjA3LTkuMTEzMyAyMi4zNDQtMS41MDc4IDcuMTk5MiA3LjY3NTggOS40NTMxIDE3LjI3IDEwLjk4OCAyNy45NDV6Ii8+CiAgPHBhdGggZD0ibTQyOC4yIDQyNC40NmMtMS41NzgxIDEwLjEzMy0zLjc1MzkgMTkuMjU0LTEwLjI4MSAyNi43NDYtNy41NTQ3IDguNjcxOS0xNy4zNDQgNy44NTU1LTIzLjY4LTEuNzE0OC04LjQzMzYtMTIuNzQyLTYuODcxMS0zNS43NDIgMy4yMTg4LTQ3LjI4MSA3LjgwMDgtOC45MTggMTguMzQ4LTguNDgwNSAyMy45NDEgMS44OTQ1IDMuMzQzOCA2LjIwMzEgNC42MDk0IDEzLjUzNSA2LjgwMDggMjAuMzU1eiIvPgogIDxwYXRoIGQ9Im0zMTIuNTIgMzMyLjRjNS42OTE0IDEuMjA3IDExLjQ5MiAyLjA3NDIgMTcuMDIzIDMuODA0NyAxLjk0NTMgMC42MDU0NyAzLjIzNDQgMy4zMjAzIDQuODI0MiA1LjA2NjQtMi4zNTU1IDAuNTc0MjItNC43NjU2IDEuODAwOC03LjA0NjkgMS41ODU5LTUuMzAwOC0wLjQ4ODI4LTEwLjUwOC0yLjI0NjEtMTUuNzg5LTIuNDM3NS05LjYzMjgtMC4zNTU0Ny0xMy42MjUgMy4xNzE5LTE2LjI5NyAxMi4yNjYtMC41NTQ2OSAxLjg4NjctMi42MDU1IDMuMzI4MS0zLjk2NDggNC45NzY2LTEuMDQ2OS0yLjExMzMtMy4xNTIzLTQuMzIwMy0yLjk2ODgtNi4zMTI1IDEuMDUwOC0xMS41MjcgMTAuNTItMTguNTIzIDI0LjIxOS0xOC45NDl6Ii8+CiAgPHBhdGggZD0ibTQyMy40NiAzMzMuMDFjMTQuNTQ3LTAuMDE5NTMxIDIzLjgxMiA2Ljk2NDggMjQuOTE4IDE4LjIzOCAwLjE5OTIyIDIuMDIzNC0xLjg0NzcgNC4yNTc4LTIuODU1NSA2LjM5ODQtMS4zODY3LTEuNjA1NS0zLjQ5NjEtMi45OTYxLTQuMDQzLTQuODU1NS0yLjcyNjYtOS4yMzA1LTYuNTkzOC0xMi43MjctMTYuMjE1LTEyLjM1NS01LjUyNzMgMC4yMDcwMy0xMC45NzMgMi4wMDM5LTE2LjUwOCAyLjU2NjQtMi4wNTA4IDAuMjE0ODQtNC4yNDYxLTEuMDQ2OS02LjM4MjgtMS42MzY3IDEuNTM5MS0xLjc2OTUgMi43NS00LjMwMDggNC42ODc1LTUuMTQ0NSAzLjI4NTItMS40Mjk3IDcuMDE5NS0xLjkxNDEgMTAuNjAyLTIuNTgyIDIuMzgyOC0wLjQ0NTMxIDQuODMyLTAuNTMxMjUgNS43OTY5LTAuNjI4OTF6Ii8+CiAgPHBhdGggZD0ibTM2OC40MyA1MTAuNjRjMjMuNTY2IDAuODIwMzEgNDYuNzI3IDMuNDYwOSA2OS40NDkgOS41ODIgMS40MTAyIDAuMzc4OTEgMy4wMDc4IDAuNTE5NTMgNC4xNDg0IDEuMzEyNSAxLjM3NSAwLjk1MzEyIDIuMzU1NSAyLjQ3MjcgMy41MDM5IDMuNzUtMS42NDQ1IDAuNTk3NjYtMy40MTggMS45NDE0LTQuOTAyMyAxLjY2NDEtNS4yNDYxLTAuOTg0MzctMTAuMzU1LTIuNzA3LTE1LjU4Ni0zLjgxNjQtNDEuNzAzLTguODM5OC04My4yNy03LjIwMzEtMTI0LjcyIDEuNzkzLTAuOTUzMTIgMC4yMDMxMi0xLjk0OTIgMC45MTc5Ny0yLjc4OTEgMC43NDIxOS0xLjY5OTItMC4zNzEwOS0zLjMwODYtMS4xODM2LTQuOTQ5Mi0xLjgxMjUgMS4xODM2LTEuMjY1NiAyLjE3MTktMy4zMzk4IDMuNTcwMy0zLjY2MDIgOS4wMDc4LTIuMDY2NCAxOC4wMzUtNC4zMjAzIDI3LjE4NC01LjQyNTggMTQuOTc3LTEuODIwMyAzMC4wNTktMi44MDA4IDQ1LjA5NC00LjEyODl6Ii8+CiA8L2c+Cjwvc3ZnPgo="
          alt="logo"
        ></img>
      </div>
      <div className="button2">
        <img className="navbar-icon" src={profile} alt="profile"></img>
        <div className="dropdown-content">
          <button className="dropdown-butt">Profile</button>{" "}
          <div className="divider"></div>
          <button className="dropdown-butt">Logout</button>{" "}
        </div>
      </div>
    </div>
  );
}
