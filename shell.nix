{pkgs ? import <nixpkgs> {}}:
pkgs.mkShellNoCC {
  name = "intra";

  buildInputs = with pkgs; [
    git
    gh

    live-server
  ];
}
