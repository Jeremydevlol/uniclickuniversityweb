"use client"

import React from 'react'

const TruckAnimation = () => {
  return (
    <div className="truck-container">
      <div className="truck">
        <div className="truck__body">
          <div className="truck__body truck__body--top">
            <div className="truck__window">
              <div className="truck__window-glass" />
            </div>
          </div>
          <div className="truck__body truck__body--mid">
            <div className="truck__mid-body" />
          </div>
          <div className="truck__body truck__body--bottom">
            <div className="truck__underpanel" />
            <div className="truck__rear-bumper" />
            <div className="truck__side-skirt" />
          </div>
        </div>
        <div className="truck__wheel truck__wheel--front">
          <div className="truck__wheel-arch" />
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top" />
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left" />
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right" />
          <div className="truck-wheel">
            <div className="truck-wheel__rim">
              <div style={{zIndex: 0}} className="truck-wheel__spoke" />
              <div style={{zIndex: 1}} className="truck-wheel__spoke" />
              <div style={{zIndex: 2}} className="truck-wheel__spoke" />
              <div style={{zIndex: 3}} className="truck-wheel__spoke" />
              <div style={{zIndex: 4}} className="truck-wheel__spoke" />
              <div style={{zIndex: 5}} className="truck-wheel__spoke" />
              <div style={{zIndex: 6}} className="truck-wheel__spoke" />
            </div>
          </div>
        </div>
        <div className="truck__wheel truck__wheel--rear">
          <div className="truck__wheel-arch" />
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top" />
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left" />
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right" />
          <div className="truck-wheel">
            <div className="truck-wheel__rim">
              <div style={{zIndex: 0}} className="truck-wheel__spoke" />
              <div style={{zIndex: 1}} className="truck-wheel__spoke" />
              <div style={{zIndex: 2}} className="truck-wheel__spoke" />
              <div style={{zIndex: 3}} className="truck-wheel__spoke" />
              <div style={{zIndex: 4}} className="truck-wheel__spoke" />
              <div style={{zIndex: 5}} className="truck-wheel__spoke" />
              <div style={{zIndex: 6}} className="truck-wheel__spoke" />
            </div>
          </div>
        </div>
        <div className="truck__headlight" />
        <div className="truck__taillight" />
        <div className="truck__indicator" />
        <div className="truck__foglight" />
      </div>
    </div>
  )
}

export default TruckAnimation
