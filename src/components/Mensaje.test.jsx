import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Mensaje from "./Mensaje";

const abort = false;
const loading = true;

describe("Mensaje", () => {
  test("should not show the connection error at the start", () => {
    render(
      abort && !loading && (
        <Mensaje
          content={
            "Hola team. Deben conectarse a través de una VPN, ya que los datos están siendo consumidos mediante un hosting en Railway. Disculpas por las molestias. 😁"
          }
        />
      )
    );
    expect(screen.queryByText(/Hola team/i)).toBeNull();
  });
});
