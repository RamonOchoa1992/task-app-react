import { describe, expect } from "vitest";
import Modal from "./Modal";
import LoadingAdd from "./LoadingAdd";
import { render, screen } from "@testing-library/react";

const loadingAdd = false;
const loadingUpd = false;
const loadingDel = false;

describe("Modal", () => {
  test("should not show the adding modal at the start", () => {
    render(
      loadingAdd && (
        <Modal backColor={"rgba(0, 0, 0, 0.75)"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>Adding Task!</h3>
            <div style={{ marginLeft: "6rem" }}>
              <LoadingAdd />
            </div>
          </div>
        </Modal>
      )
    );
    expect(screen.queryByText(/Adding/i)).toBeNull();
  });

  test("should not show the updating modal at the start", () => {
    render(
      loadingUpd && (
        <Modal backColor={"rgba(0, 0, 0, 0.75)"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>Updating Task!</h3>
            <div style={{ marginLeft: "6rem" }}>
              <LoadingAdd />
            </div>
          </div>
        </Modal>
      )
    );
    expect(screen.queryByText(/Updating/i)).toBeNull();
  });

  test("should not show the deleting modal at the start", () => {
    render(
      loadingDel && (
        <Modal backColor={"rgba(0, 0, 0, 0.75)"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>Well Done!</h3>
            <div style={{ marginLeft: "6rem" }}>
              <LoadingAdd />
            </div>
          </div>
        </Modal>
      )
    );
    expect(screen.queryByText(/Well Done!/i)).toBeNull();
  });
});
