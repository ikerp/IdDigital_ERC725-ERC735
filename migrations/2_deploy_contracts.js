let ClaimHolder = artifacts.require("ClaimHolder");
const ClaimVerifier = artifacts.require("ClaimVerifier");

module.exports = async function(deployer) {
  await deployer.deploy(ClaimHolder);
  await deployer.deploy(ClaimVerifier, ClaimHolder.address);
  const alumno = await ClaimHolder.new();
  await deployer.deploy(alumno);
};
