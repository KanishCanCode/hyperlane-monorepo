// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/*@@@@@@@       @@@@@@@@@
 @@@@@@@@@       @@@@@@@@@
  @@@@@@@@@       @@@@@@@@@
   @@@@@@@@@       @@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@
     @@@@@  HYPERLANE  @@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@       @@@@@@@@@
  @@@@@@@@@       @@@@@@@@@
 @@@@@@@@@       @@@@@@@@@
@@@@@@@@@       @@@@@@@@*/

import {GlobalHookMetadata} from "../libs/hooks/GlobalHookMetadata.sol";
import {AbstractPostDispatchHook} from "./AbstractPostDispatchHook.sol";

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Pausable} from "@openzeppelin/contracts/security/Pausable.sol";

contract PausableHook is AbstractPostDispatchHook, Ownable, Pausable {
    using GlobalHookMetadata for bytes;

    // ============ External functions ============

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    // ============ Internal functions ============

    /// @inheritdoc AbstractPostDispatchHook
    function _postDispatch(bytes calldata metadata, bytes calldata message)
        internal
        override
        whenNotPaused
    {}

    /// @inheritdoc AbstractPostDispatchHook
    function _quoteDispatch(bytes calldata, bytes calldata)
        internal
        pure
        override
        returns (uint256)
    {
        return 0;
    }
}